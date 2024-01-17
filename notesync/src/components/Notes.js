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

  // const deletePresentNote = () => {

  //   deleteNote(note.id);

  // }

  return (
    
    <>

        <div className=' my-14 mx-12 h-[24rem] w-[24rem] bg-slate-600 border-2 border-white rounded-lg flex flex-col justify-center items-center ' >

          <input type="text" className={` outline-none h-[15rem] w-[15rem] bg-slate-600 text-white rounded-lg
            ${ isEditable ? "border-2 border-white" : "border-transparent" }
          `} 
            onChange = {(e) => setnoteText(e.target.value)}
            readOnly = {!isEditable}
            value = {noteText}

          />

          <div className='flex flex-row justify-center items-center ' >

          <button className=' w-16 m-4 bg-white text-black rounded-lg border-2 border-black '
          onClick={ () => {
            if(isEditable){
              editNoteText();
            }
            else{
              setIsEditable((prev) => !prev);
            }
          } }
          >
            {isEditable ? "SAVE" : "EDIT" }
          </button>

          <button className=' w-16 m-4 bg-white text-black rounded-lg border-2 border-black ' 
          onClick={() => deleteNote(note.id)}
          >
            DELETE
          </button>
          </div>




        </div>
    
    </>
  )
}

export default Notes
