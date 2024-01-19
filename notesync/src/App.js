import { useEffect, useState } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Notes from './components/Notes';


function App() {

  return (

    <>

      <div className=' m-10 flex justify-center items-center text-8xl text-yellow-300' >
            NOTE SYNC
      </div>

      <div>
        <AddNote />
      </div>

      <div>
        <Notes/> 
      </div>
      
    </>
    
  );
}

export default App;
