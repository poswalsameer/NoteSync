import './App.css';
import AddNote from './components/AddNote';
import Notes from './components/Notes';


function App() {

  return (

    <>

      <div className=' m-16 flex justify-center items-center text-8xl
        text-[#e8a87c]
      font-extrabold ' >
            NOTE <span className='text-[#41b3a3]'>-SYNC</span>
      </div>


        <AddNote />
        
        <Notes/> 
          
    </>
    
  );
}

export default App;
