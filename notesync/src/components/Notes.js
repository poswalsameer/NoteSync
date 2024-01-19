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
                <div key={eachNote.id} className='h-[22rem] w-[22rem] bg-[#644531] font-bold text-xl text-[#e8a87c] border-4 border-[#e8a87c] rounded-lg flex flex-col text-ellipsis overflow-hidden justify-center items-center m-10 ' >
                    
                    <textarea className='h-[16rem] w-[16rem] p-4 flex justify-center items-center text-center bg-[#644531] resize-none ' >
                    {eachNote.noteText}
                    </textarea>

                    <button onClick={() => dispatch(deleteNote(eachNote.id))} 
                    ><img src="trashbin.png" alt="" className=' mt-4 h-10 w-10'/></button>

{/* CLASS FOR THE BUTTON */}
{/* className='rounded-lg h-10 w-20 bg-white text-black font-bold border-2 border-black my-4 ' */}

                </div>

            ) ) }

        </div>
      
    </>
  )
}

export default Notes
