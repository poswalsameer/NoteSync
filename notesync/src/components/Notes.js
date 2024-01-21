import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deleteNote} from '../slices/noteSlice'

function Notes() {

    const allNotes = useSelector( state => state.notes.notes);
    const dispatch = useDispatch();

  return (
    <>


        <div id='notesDiv' className='grid grid-cols-2 justify-items-center items-center
        
        sm:grid sm:grid-cols-3 sm:justify-items-center sm:items-center
        
        md:grid md:grid-cols-3 md:justify-items-center md:items-center
        
        lg:grid lg:grid-cols-3 lg:justify-items-center lg:items-center
        
        xl:grid xl:grid-cols-3 xl:justify-items-center xl:items-center
        
        2xl:grid 2xl:grid-cols-4 2xl:justify-items-center 2xl:items-center
        ' >

            {allNotes.map( (eachNote) => (
                <div key={eachNote.id} className='h-[9rem] w-[9rem] bg-[#644531] font-bold text-[#e8a87c] border-4 border-[#e8a87c] rounded-lg flex flex-col text-ellipsis overflow-hidden justify-center items-center m-10 focus:outline-none focus:border-2 focus:border-[#e8a87c]
                
                sm:h-[12rem] sm:w-[12rem] sm:bg-[#644531] sm:font-bold sm:text-xl sm:text-[#e8a87c] sm:border-4 sm:border-[#e8a87c] sm:rounded-lg sm:flex sm:flex-col sm:text-ellipsis sm:overflow-hidden sm:justify-center sm:items-center sm:m-10 sm:focus:outline-none sm:focus:border-2 sm:focus:border-[#e8a87c]
                
                md:h-[14rem] md:w-[14rem] md:bg-[#644531] md:font-bold md:text-xl md:text-[#e8a87c] md:border-4 md:border-[#e8a87c] md:rounded-lg md:flex md:flex-col md:text-ellipsis md:overflow-hidden md:justify-center md:items-center md:m-10 md:focus:outline-none md:focus:border-2 md:focus:border-[#e8a87c]

                
                lg:h-[18rem] lg:w-[18rem] lg:bg-[#644531] lg:font-bold lg:text-xl lg:text-[#e8a87c] lg:border-4 lg:border-[#e8a87c] lg:rounded-lg lg:flex lg:flex-col lg:text-ellipsis lg:overflow-hidden lg:justify-center lg:items-center lg:m-10 lg:focus:outline-none lg:focus:border-2 lg:focus:border-[#e8a87c]
                
                
                xl:h-[22rem] xl:w-[22rem] xl:bg-[#644531] xl:font-bold xl:text-xl xl:text-[#e8a87c] xl:border-4 xl:border-[#e8a87c] xl:rounded-lg xl:flex xl:flex-col xl:text-ellipsis xl:overflow-hidden xl:justify-center xl:items-center xl:m-10 xl:focus:outline-none xl:focus:border-2 xl:focus:border-[#e8a87c] 
                
                2xl:h-[20rem] 2xl:w-[20rem] 2xl:bg-[#644531] 2xl:font-bold 2xl:text-xl 2xl:text-[#e8a87c] 2xl:border-4 2xl:border-[#e8a87c] 2xl:rounded-lg 2xl:flex 2xl:flex-col 2xl:text-ellipsis 2xl:overflow-hidden 2xl:justify-center 2xl:items-center 2xl:m-10 2xl:focus:outline-none 2xl:focus:border-2 2xl:focus:border-[#e8a87c]
                ' >
                    
                    <textarea className='h-[5rem] w-[7rem] p-4 flex justify-center items-center text-center bg-[#644531] resize-none focus:outline-none focus:border-2 focus:border-[#e8a87c] rounded-lg
                    
                    sm:h-[7rem] sm:w-[9rem] sm:p-4 sm:flex sm:justify-center sm:items-center sm:text-center sm:bg-[#644531] sm:resize-none sm:focus:outline-none sm:focus:border-2 sm:focus:border-[#e8a87c] sm:rounded-lg
                    
                    md:h-[9rem] md:w-[11rem] md:p-4 md:flex md:justify-center md:items-center md:text-center md:bg-[#644531] md:resize-none md:focus:outline-none md:focus:border-2 md:focus:border-[#e8a87c] md:rounded-lg
                    
                    
                    lg:h-[12rem] lg:w-[14rem] lg:p-4 lg:flex lg:justify-center lg:items-center lg:text-center lg:bg-[#644531] lg:resize-none lg:focus:outline-none lg:focus:border-2 lg:focus:border-[#e8a87c] lg:rounded-lg
                    
                    
                    xl:h-[16rem] xl:w-[18rem] xl:p-4 xl:flex xl:justify-center xl:items-center xl:text-center xl:bg-[#644531] xl:resize-none xl:focus:outline-none xl:focus:border-2 xl:focus:border-[#e8a87c] xl:rounded-lg
                    
                    2xl:h-[14rem] 2xl:w-[16rem] 2xl:p-4 2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-center 2xl:bg-[#644531] 2xl:resize-none 2xl:focus:outline-none 2xl:focus:border-2 2xl:focus:border-[#e8a87c] 2xl:rounded-lg
                    ' >
                    {eachNote.noteText}
                    </textarea>

                    <button onClick={() => dispatch(deleteNote(eachNote.id))} 
                    ><img src="trashbin.png" alt="" className='mt-4 h-6 w-6
                    
                    sm:mt-4 sm:h-8 sm:w-8
                    
                    md:mt-4 md:h-8 md:w-8

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
