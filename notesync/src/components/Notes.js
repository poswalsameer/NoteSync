import React, { useState } from 'react'
import { useNotes } from '../contexts/AppContext'

function Notes({ note }) {

  const [isEditable, setIsEditable] = useState(false);
  const [ noteText, setnoteText ] = useState(note.noteMsg);

  const { editNote, deleteNote } = useNotes();

  const editNoteText = () => {

    editNote(note.id, {...note, noteMsg: noteText})
    setIsEditable(false);

  }

  return (
    
    <>

        <div className='h-[30rem] w-[30rem] bg-slate-600 border-2 border-white ' ></div>
    
    </>
  )
}

export default Notes
