import React, { useState } from 'react'
import { useNotes } from '../contexts/AppContext';

function AddNote() {

    const [notes, setNotes] = useState("");
    const {addNote} = useNotes();

    //THIS FUNCTION DOES THE WORK OF ADDING NEW NOTE IN THE UI
    const add = () => {
        
        if( !notes ){
            return;
        }

        addNote( {newNote: notes} );

        //AFTER ADDING CLEAR THE INPUT FIELD
        setNotes("");
    }


    return (
    <>

        <div className='flex flex-row justify-center items-center' >

            <input type="text" className=' h-20 w-[40rem] rounded-lg border-4 border-blue-700 text-black font-bold p-4 ' value={notes} onChange = {(e) => setNotes(e.target.value)} />

            <button className=' h-20 w-40 mx-6 bg-blue-700 text-black font-bold rounded-lg ' onClick={add} >Add Note</button>


        </div>
    
    </>
  )
}

export default AddNote
