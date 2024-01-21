import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addNote, showNotes} from '../slices/noteSlice';
import {nanoid} from "@reduxjs/toolkit";


function AddNote() {

    const [text, setText] = useState('');
    // const [notes, setNotes] = useState([]);

    const allNotes = useSelector((state) => state.notes.notes);

    const dispatch = useDispatch();

    const addTextToNote = () => {

        if(text.length > 0){
          dispatch(addNote(text));
        }
        

        const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
        const newNotes = [...existingNotes, { id: nanoid(), noteText: text }];
        localStorage.setItem('notes', JSON.stringify(newNotes));

        console.log(text);
        setText('');
    }

    useEffect(() => {
      // Initialize notes from local storage when the component mounts
      const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
      dispatch(showNotes(existingNotes));
    }, [dispatch]);

  return (
    <>
    
    <div className='m-10 flex flex-col justify-center items-center

     sm:m-10 sm:flex sm:flex-row sm:justify-center sm:items-center
    
    md:m-10 md:flex md:flex-row md:justify-center md:items-center
    
    lg:m-10 lg:flex lg:flex-row lg:justify-center lg:items-center
    
    xl:m-10 xl:flex xl:flex-row xl:justify-center xl:items-center' >

        <textarea name="" id="" cols="30" rows="10" className='h-20 w-[20rem] bg-[#e8a87c] rounded-lg border-4 border-[#644531] text-black font-bold p-4 resize-none focus:outline-none
        
        sm:h-20 sm:w-[35rem] sm:bg-[#e8a87c] sm:rounded-lg sm:border-4 sm:border-[#644531] sm:text-black sm:font-bold sm:p-4 sm:resize-none sm:focus:outline-none
        
        md:h-20 md:w-[35rem] md:bg-[#e8a87c] md:rounded-lg md:border-4 md:border-[#644531] md:text-black md:font-bold md:p-4 md:resize-none md:focus:outline-none
        
        lg:h-20 lg:w-[40rem] lg:bg-[#e8a87c] lg:rounded-lg lg:border-4 lg:border-[#644531] lg:text-black lg:font-bold lg:p-4 lg:resize-none lg:focus:outline-none
        
        xl:h-20 xl:w-[40rem] xl:bg-[#e8a87c] xl:rounded-lg xl:border-4 xl:border-[#644531] xl:text-black xl:font-bold xl:p-4 xl:resize-none xl:focus:outline-none ' value={text} onChange={ (e) => setText(e.target.value) } ></textarea>

        <button className='h-16 w-32 my-6 mx-6 bg-[#41b3a3] text-xl text-[#644531] border-4 border-[#644531] font-bold rounded-lg hover:bg-[#644531] hover:text-[#41b3a3] hover:border-4 hover:border-[#41b3a3]
        
        
        sm:h-20 sm:w-40 sm:mx-6 sm:bg-[#41b3a3] sm:text-xl sm:text-[#644531] sm:border-4 sm:border-[#644531] sm:font-bold sm:rounded-lg sm:hover:bg-[#644531] sm:hover:text-[#41b3a3] sm:hover:border-4 sm:hover:border-[#41b3a3]
        
        md:h-20 md:w-40 md:mx-6 md:bg-[#41b3a3] md:text-xl md:text-[#644531] md:border-4 md:border-[#644531] md:font-bold md:rounded-lg md:hover:bg-[#644531] md:hover:text-[#41b3a3] md:hover:border-4 md:hover:border-[#41b3a3]
        
        lg:h-20 lg:w-40 lg:mx-6 lg:bg-[#41b3a3] lg:text-xl lg:text-[#644531] lg:border-4 lg:border-[#644531] lg:font-bold lg:rounded-lg lg:hover:bg-[#644531] lg:hover:text-[#41b3a3] lg:hover:border-4 lg:hover:border-[#41b3a3]
        
        xl:h-20 xl:w-40 xl:mx-6 xl:bg-[#41b3a3] xl:text-xl xl:text-[#644531] xl:border-4 xl:border-[#644531] xl:font-bold xl:rounded-lg xl:hover:bg-[#644531] xl:hover:text-[#41b3a3] xl:hover:border-4 xl:hover:border-[#41b3a3]  ' onClick={addTextToNote} >Add Note</button>


    </div>
    
    </>
  )
}

export default AddNote

