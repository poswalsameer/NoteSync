import { useEffect, useState } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
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


  // WORKING ON LOCAL STORAGE FROM HERE

  //WE HAVE USED USE-EFFECT BCUZ, WHENEVER THE PAGE IS LOADED, WE NEED TO SHOW ALL THE SAVED NOTES
  useEffect( () => {

    //THIS IS NOTHING BUT GETTING ALL THE SAVED NOTES FROM OUR LOCAL STORAGE
    const allNotes = JSON.parse(localStorage.getItem('allNotes'));

    //AND DISPLAYING THEM USING THE FUNCTION OF USE STATE
    if( allNotes && allNotes.length>0 ){
      setNote(allNotes);
    }
  }, [] ) 

  //USING THIS USE EFFECT TO RE-RENDER THE PAGE WHENEVER A NEW NOTE IS ADDED AND ALSO STORING IT IN THE LOCAL STORAGE 
  useEffect( () => {
    //here the "note" used is from the first useState that denotes all the notes
    localStorage.setItem("note", JSON.stringify(note));
  }, [note] )

  return (
    <notesProvider value={{ note, addNote, deleteNote, editNote }} >

      <div className=' m-10 flex justify-center items-center text-8xl text-yellow-300' >
            NOTE SYNC
      </div>

      //COMPONENT OF THE ADD NOTE INPUT FIELD
      <div>
        <AddNote />
      </div>

      //DIV WHERE WE WILL SHOW ALL THE NOTES USING MAP(LOOP)
      <div>
        
        //note is from the context, note is the array of objects where all notes are stored
        //this array is looped and new divs are created by using the idz in every note to display them on the browser
        {note.map( (eachNote) => (
          <div key={eachNote.id}>
              <Notes />
          </div>
        ) )}

      </div>

      
    </notesProvider>
  );
}

export default App;
