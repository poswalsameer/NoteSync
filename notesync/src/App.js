import { useState } from 'react';
import './App.css';
import { notesContext } from './contexts/AppContext';
import { notesProvider } from './contexts/AppContext';
import { useNotes } from './contexts/AppContext';

function App() {

  // state that has all the notes 
  const [note, setNote] = useState([]);

  //function to add new notes
  const addNote = (newNote) => {
    setNote( (prevNotes) => [...prevNotes, {id: Date.now(), ...newNote}] );
  }

  //function to delete notes
  const deleteNote = (noteId) => {
    setNote( (prevNote) => prevNote.filter( (prev) => prev.id !== noteId ) );
  }

  //function to edit old notes
  const editNote = (noteId, newNote) => {
    setNote( (prev) => prev.map( (prevNote) => (prevNote.id === noteId ? newNote : prevNote ) ) );
  }

  // //function
  // const toggleComplete = (noteId) => {

  //   setNote( (prevNote) => prevNote.map( (prev) => prev.id === noteId ? {...prev, completed: !prev.completed} : prev ) )

  // }

  return (
    <notesProvider value={{ notes, addNote, deleteNote, editNote }} >

      <div className=' m-10 flex justify-center items-center text-8xl text-yellow-300' >
            NOTE SYNC
      </div>

      
    </notesProvider>
  );
}

export default App;
