import React from 'react'


const CreateNote = ({ inputText, setInputText, setTitle, title, saveNotes }) => {
  return (
    <div className='note'>
      <input
        value={title}
        placeholder="Title og the Note"
        onChange={(e) => setTitle(e.target.value)}
        className='title_inputs'
      />

      <textarea
        cols={20}
        rows={10}
        placeholder='Write here...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={500}
      >
      </textarea>
      <div>
        <button className='note_save' onClick={saveNotes}>Save</button>
      </div>
    </div>
  )
}

export default CreateNote