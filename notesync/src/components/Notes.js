import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteNote} from '../slices/noteSlice'

function Notes() {

    const allNotes = useSelector( state => state.notes.notes);
    const dispatch = useDispatch();

  return (
    <>


        <div className='md:grid md:grid-cols-3 md:justify-items-center md:items-center
        
        lg:grid lg:grid-cols-3 lg:justify-items-center lg:items-center
        
        xl:grid xl:grid-cols-3 xl:justify-items-center xl:items-center' >

            {allNotes.map( (eachNote) => (
                <div key={eachNote.id} className='md:h-[14rem] md:w-[14rem] md:bg-[#644531] md:font-bold md:text-xl md:text-[#e8a87c] md:border-4 md:border-[#e8a87c] md:rounded-lg md:flex md:flex-col md:text-ellipsis md:overflow-hidden md:justify-center md:items-center md:m-10 md:focus:outline-none md:focus:border-2 md:focus:border-[#e8a87c]

                
                lg:h-[18rem] lg:w-[18rem] lg:bg-[#644531] lg:font-bold lg:text-xl lg:text-[#e8a87c] lg:border-4 lg:border-[#e8a87c] lg:rounded-lg lg:flex lg:flex-col lg:text-ellipsis lg:overflow-hidden lg:justify-center lg:items-center lg:m-10 lg:focus:outline-none lg:focus:border-2 lg:focus:border-[#e8a87c]
                
                
                xl:h-[22rem] xl:w-[22rem] xl:bg-[#644531] xl:font-bold xl:text-xl xl:text-[#e8a87c] xl:border-4 xl:border-[#e8a87c] xl:rounded-lg xl:flex xl:flex-col xl:text-ellipsis xl:overflow-hidden xl:justify-center xl:items-center xl:m-10 xl:focus:outline-none xl:focus:border-2 xl:focus:border-[#e8a87c] ' >
                    
                    <textarea className='md:h-[9rem] md:w-[11rem] md:p-4 md:flex md:justify-center md:items-center md:text-center md:bg-[#644531] md:resize-none md:focus:outline-none md:focus:border-2 md:focus:border-[#e8a87c] md:rounded-lg
                    
                    
                    lg:h-[12rem] lg:w-[14rem] lg:p-4 lg:flex lg:justify-center lg:items-center lg:text-center lg:bg-[#644531] lg:resize-none lg:focus:outline-none lg:focus:border-2 lg:focus:border-[#e8a87c] lg:rounded-lg
                    
                    
                    xl:h-[16rem] xl:w-[18rem] xl:p-4 xl:flex xl:justify-center xl:items-center xl:text-center xl:bg-[#644531] xl:resize-none xl:focus:outline-none xl:focus:border-2 xl:focus:border-[#e8a87c] xl:rounded-lg ' >
                    {eachNote.noteText}
                    </textarea>

                    <button onClick={() => dispatch(deleteNote(eachNote.id))} 
                    ><img src="trashbin.png" alt="" className='md:mt-4 md:h-8 md:w-8

                    lg:mt-4 lg:h-10 lg:w-10
                    
                    xl:mt-4 xl:h-10 xl:w-10'/></button>

{/* CLASS FOR THE BUTTON */}
{/* className='rounded-lg h-10 w-20 bg-white text-black font-bold border-2 border-black my-4 ' */}

                </div>

            ) ) }

        </div>
      
    </>
  )
}

export default Notes
