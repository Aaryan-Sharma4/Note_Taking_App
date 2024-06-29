// src/components/NoteList.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Note from './Note';

const NoteList: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);

    const listStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Adjusted to display four columns
        gap: '20px',
        justifyContent: 'center',
    };

    return (
        <div style={listStyle}>
            {notes.map(note => (
                <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    pinned={note.pinned}
                    color={note.color}
                    image={note.image}
                />
            ))}
        </div>
    );
};

export default NoteList;
