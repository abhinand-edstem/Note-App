import React from 'react';

const Note = ({ id, text, title, editHandler, deleteNote, fulView }) => {
  console.warn({ text });
  return (
    <div className='note'>
      <div className='note-body'>
        <h1>{title}</h1>
        {text}
        </div>
      <div className='note_footer'>
        <button className='note_save' onClick={() => fulView(text, title)}>View</button>
        <button className='note_save' onClick={() => deleteNote(id)}>Delete</button> &nbsp;
        <button className='note_save' onClick={() => editHandler(id, text, title)}>Edit</button>
      </div>
    </div>
  )
}

export default Note