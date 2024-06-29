// src/store/noteSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

interface Note {
    id: string;
    title: string;
    content: string;
    pinned: boolean;
    color: string;
    image?: string;
}

interface NoteState {
    notes: Note[];
}

const initialState: NoteState = {
    notes: [],
};

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
        },
        removeNote: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        togglePin: (state, action: PayloadAction<string>) => {
            const note = state.notes.find(note => note.id === action.payload);
            if (note) {
                note.pinned = !note.pinned;
            }
        },
        // Additional reducers for color, image, etc. if needed
    },
});

export const { addNote, removeNote, togglePin } = noteSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export default noteSlice.reducer;
