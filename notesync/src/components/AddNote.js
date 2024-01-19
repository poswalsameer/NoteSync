import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addNote} from '../slices/noteSlice';


function AddNote() {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const addTextToNote = () => {
        dispatch(addNote(text));
        console.log(text);
        setText('');
    }

  return (
    <>
    
    <div className=' m-10 flex flex-row justify-center items-center' >

        <textarea name="" id="" cols="30" rows="10" className='h-20 w-[40rem] rounded-lg border-4 border-[#41b3a3] text-black font-bold p-4 resize-none ' value={text} onChange={ (e) => setText(e.target.value) } ></textarea>

        <button className=' h-20 w-40 mx-6 bg-[#41b3a3] text-xl text-[#644531] border-4 border-[#41b3a3] font-bold rounded-lg ' onClick={addTextToNote} >Add Note</button>


    </div>
    
    </>
  )
}

export default AddNote

