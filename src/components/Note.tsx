// src/components/Note.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeNote, togglePin } from '../store/noteSlice'; // Importing togglePin from noteSlice
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faTrash } from '@fortawesome/free-solid-svg-icons';

interface NoteProps {
    id: string;
    title: string;
    content: string;
    pinned: boolean;
    color: string;
    image?: string;
}

const Note: React.FC<NoteProps> = ({ id, title, content, pinned, color, image }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeNote(id)); // Dispatching removeNote with the note id as payload
    };

    const handleTogglePin = () => {
        dispatch(togglePin(id)); // Dispatching togglePin with the note id as payload
    };

    const noteStyle: React.CSSProperties = {
        backgroundColor: color,
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '20px',
        width: '250px',
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', // Ensure 'position' is properly typed
    };

    const titleStyle: React.CSSProperties = {
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    };

    const contentStyle: React.CSSProperties = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        flex: '1',
        color: '#555',
    };

    const imageStyle: React.CSSProperties = {
        maxWidth: '100%',
        maxHeight: '100px',
        marginTop: '10px',
    };

    const iconStyle: React.CSSProperties = {
        fontSize: '16px',
        cursor: 'pointer',
        marginRight: '5px',
        color: '#777',
    };

    return (
        <div style={noteStyle}>
            {title && <div style={titleStyle}>{title}</div>}
            <div style={contentStyle}>{content}</div>
            {image && (
                <div>
                    <img src={image} alt="Note Image" style={imageStyle} />
                </div>
            )}
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    {pinned ? (
                        <FontAwesomeIcon icon={faThumbtack} style={{ ...iconStyle, color: '#f44336' }} onClick={handleTogglePin} />
                    ) : (
                        <FontAwesomeIcon icon={faThumbtack} style={iconStyle} onClick={handleTogglePin} />
                    )}
                </div>
                <button
                    onClick={handleDelete}
                    title="Delete Note"
                    style={{
                        padding: '5px 10px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        color: '#f44336',
                    }}
                >
                    <FontAwesomeIcon icon={faTrash} style={iconStyle} />
                </button>
            </div>
        </div>
    );
};

export default Note;
