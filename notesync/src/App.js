// // import { useEffect, useState } from 'react';
// import './App.css';
// import AddNote from './components/AddNote';
// import Notes from './components/Notes';
// // import noteSlice from './slices/noteSlice';


// function App() {

//   return (

//     <>

//       <div className=' m-16 flex justify-center items-center text-8xl
//         text-[#e8a87c]
//       font-extrabold ' >
//             NOTE <span className='text-[#41b3a3]'>-SYNC</span>
//       </div>


//         <AddNote />
        
//         <Notes/> 
          
//     </>
    
//   );
// }

// export default App;

// App.js
import React from 'react';
import AddNote from './components/AddNote';
import Notes from './components/Notes';
import { Provider } from 'react-redux';
import store from './store/store';
import { showNotes } from './slices/noteSlice';

function App() {

  const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
  store.dispatch(showNotes(existingNotes));

  return (
    <Provider store={store}>
      <div className='m-16 flex justify-center items-center text-4xl text-[#e8a87c] font-extrabold
      
      sm:m-16 sm:flex sm:justify-center sm:items-center sm:text-7xl sm:text-[#e8a87c] sm:font-extrabold
      
      md:m-16 md:flex md:justify-center md:items-center md:text-8xl md:text-[#e8a87c] md:font-extrabold
      
      lg:m-16 lg:flex lg:justify-center lg:items-center lg:text-8xl lg:text-[#e8a87c] lg:font-extrabold

      xl:m-16 xl:flex xl:justify-center xl:items-center xl:text-8xl xl:text-[#e8a87c] xl:font-extrabold
      
      2xl:m-16 2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-9xl 2xl:text-[#e8a87c] 2xl:font-extrabold
      '>

        NOTE <span className='text-[#41b3a3] sm:text-[#41b3a3]
        md:text-[#41b3a3]
        lg:text-[#41b3a3]
        xl:text-[#41b3a3]'>-SYNC</span>
      </div>

      <AddNote />
      <Notes />
    </Provider>
  );
}

export default App;

