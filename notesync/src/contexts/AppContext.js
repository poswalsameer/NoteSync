import {createContext, useContext} from "react"

export const notesContext = createContext({

    //this is the basic blueprint of how the structure will look like, all of the notes will be in the form of an array of objects, each object or notes having it's own Id, noteMsg, and completion status or not

    notes: [
        
    ],

    //adding functions for various tasks in the app
    addNote : (noteMsg) => {},
    deleteNote : (id) => {},
    editNote : (id, noteMsg) => {},

    // NO NEED FOR TOGGLECOMPLETE IN NOTES APP
    // toggleComplete : (id) => {}

});

export const useNotes = () => {
    return useContext(notesContext);
}

export const notesProvider = notesContext.provider;