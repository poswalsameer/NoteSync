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
            state.notes = state.notes.filter( eachNote => eachNote.id !== action.payload );
        },
    }
})

export const {addNote, deleteNote} = noteSlice.actions;

export default noteSlice.reducer;