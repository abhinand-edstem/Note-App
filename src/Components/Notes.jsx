import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import CreateNote from './CreateNote';
import Note from './Note';

import './notes.css';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState("")
    const [title, setTitle] = useState("")
    const [notes, setNotes] = useState([])
    const [editToggle, setEditToggle] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
            setNotes(data);
        }
        console.warn({ data });
    }, []);

    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
    }, [notes]);

    const editHandler = (id, text, title) => {
        setEditToggle(id)
        setInputText(text)
        setTitle(title);
    }
    const saveNotes = () => {
        if (editToggle) {
            setNotes(notes.map((note) => (
                note.id === editToggle ?
                    { ...note, text: inputText, title: title }
                    : note
            )))
        } else {
            setNotes((prevNotes) => [
                ...prevNotes, {
                    id: uuid(),
                    text: inputText,
                    title: title,
                }
            ])
        }
        setInputText("");
        setTitle("");
        setEditToggle(null)
    }

    const fulView = (text, title) => {
        const viewData = { title: title, content: text };
        navigate("/view", {
            state: {
                viewData
            }
        }
        )
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter(n => n.id !== id)
        setNotes(newNotes)
    }

    return (
        <>
            <div className='header'>
                <h1 className='title'>Note-Taking App</h1>
            </div>

            <div className='notes'>
                {
                    notes.map((note) => (
                        editToggle === note.id ?
                            <CreateNote
                                title={title}
                                setTitle={setTitle}
                                inputText={inputText}
                                setInputText={setInputText}
                                saveNotes={saveNotes}
                            />
                            :
                            <Note
                                key={note.id}
                                id={note.id}
                                text={note.text}
                                title={note.title}
                                editHandler={editHandler}
                                deleteNote={deleteNote}
                                fulView={fulView}
                            >
                            </Note>
                    ))
                }
                {
                    editToggle === null ?
                        <CreateNote
                            title={title}
                            setTitle={setTitle}
                            inputText={inputText}
                            setInputText={setInputText}
                            saveNotes={saveNotes}
                        /> : <></>
                }

            </div>
        </>

    )
}

export default Notes