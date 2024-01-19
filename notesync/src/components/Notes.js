import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteNote} from '../slices/noteSlice'

function Notes() {

    const allNotes = useSelector( state => state.notes);
    const dispatch = useDispatch();

  return (
    <>


        <div className='grid grid-cols-3 justify-center items-center' >

            {allNotes.map( (eachNote) => (
                <div key={eachNote.id} className='h-[22rem] w-[22rem] bg-slate-600 text-white rounded-lg flex flex-col justify-center items-center m-10 ' >
                    
                    <div className='h-[16rem] w-[16rem] p-4 flex justify-center items-center text-center ' >
                    {eachNote.noteText}
                    </div>

                    <button className='rounded-lg h-10 w-20 bg-white text-black font-bold border-2 border-black my-4 '
                    onClick={() => dispatch(deleteNote(eachNote.id))} 
                    >DELETE</button>

                </div>

            ) ) }

        </div>
      
    </>
  )
}

export default Notes

