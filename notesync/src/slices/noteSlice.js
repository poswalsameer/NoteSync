import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    notes: [
        // {
        //     id: 1,
        //     noteText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam minus ut voluptatum consectetur! Pente expedita repellat. Consectetur, eveniet."
        // }
    ]
}

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            const singleNote = {
                id: nanoid(),
                noteText: action.payload
            }
            state.notes.push(singleNote);
        },
        deleteNote: (state, action) => {
            const noteId = action.payload;
            state.notes = state.notes.filter( eachNote => eachNote.id !== action.payload );

            const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
            const updatedNotes = existingNotes.filter((note) => note.id !== noteId);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        },
        showNotes: (state, action) => {
            state.notes = action.payload;
        },
    }
})

export const {addNote, deleteNote, showNotes} = noteSlice.actions;

export default noteSlice.reducer;