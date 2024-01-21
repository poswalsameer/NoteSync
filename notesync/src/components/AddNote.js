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
        dispatch(addNote(text));

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

        <textarea name="" id="" cols="30" rows="10" className='h-20 w-[20rem] rounded-lg border-4 border-[#41b3a3] text-black font-bold p-4 resize-none
        
        sm:h-20 sm:w-[35rem] sm:rounded-lg sm:border-4 sm:border-[#41b3a3] sm:text-black sm:font-bold sm:p-4 sm:resize-none
        
        md:h-20 md:w-[35rem] md:rounded-lg md:border-4 md:border-[#41b3a3] md:text-black md:font-bold md:p-4 md:resize-none
        
        lg:h-20 lg:w-[40rem] lg:rounded-lg lg:border-4 lg:border-[#41b3a3] lg:text-black lg:font-bold lg:p-4 lg:resize-none
        
        xl:h-20 xl:w-[40rem] xl:rounded-lg xl:border-4 xl:border-[#41b3a3] xl:text-black xl:font-bold xl:p-4 xl:resize-none ' value={text} onChange={ (e) => setText(e.target.value) } ></textarea>

        <button className='h-16 w-32 my-4 mx-6 bg-[#41b3a3] text-xl text-[#644531] border-4 border-[#41b3a3] font-bold rounded-lg
        
        
        sm:h-20 sm:w-40 sm:mx-6 sm:bg-[#41b3a3] sm:text-xl sm:text-[#644531] sm:border-4 sm:border-[#41b3a3] sm:font-bold sm:rounded-lg
        
        md:h-20 md:w-40 md:mx-6 md:bg-[#41b3a3] md:text-xl md:text-[#644531] md:border-4 md:border-[#41b3a3] md:font-bold md:rounded-lg
        
        lg:h-20 lg:w-40 lg:mx-6 lg:bg-[#41b3a3] lg:text-xl lg:text-[#644531] lg:border-4 lg:border-[#41b3a3] lg:font-bold lg:rounded-lg
        
        xl:h-20 xl:w-40 xl:mx-6 xl:bg-[#41b3a3] xl:text-xl xl:text-[#644531] xl:border-4 xl:border-[#41b3a3] xl:font-bold xl:rounded-lg ' onClick={addTextToNote} >Add Note</button>


    </div>
    
    </>
  )
}

export default AddNote

