// src/components/NoteForm.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNote } from '../store/noteSlice';
import { ChromePicker, ChromePickerProps } from 'react-color'; // Import ChromePicker from react-color

const NoteForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff'); // State for color picker
  const [showColorPicker, setShowColorPicker] = useState(false); // State to control color picker visibility

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newNote = {
      id: uuidv4(),
      title,
      content,
      pinned: false,
      color,
      image: undefined,
    };
    dispatch(addNote(newNote));
    setTitle('');
    setContent('');
    onClose(); // Close the form after adding the note
  };

  const handleColorChange = (newColor: any) => {
    setColor(newColor.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div className="NoteForm" style={{
      width: '100%',
      maxWidth: '600px',
      backgroundColor: '#f5f5f5',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      marginBottom: '20px'
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label htmlFor="noteTitle" style={{ marginRight: '10px', width: '100px', textAlign: 'right' }}>Title (optional):</label>
          <input
            id="noteTitle"
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              flex: '1',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '3px',
              fontSize: '16px',
              height: '40px'
            }}
          />
        </div>
        <label htmlFor="noteContent" style={{ marginBottom: '10px', display: 'block' }}>Take a note:</label>
        <textarea
          id="noteContent"
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '3px',
            fontSize: '16px',
            minHeight: '120px',
            resize: 'vertical' // Allow vertical resizing
          }}
        />
        <div style={{ marginTop: '10px' }}>
          <label>Select Color:</label>
          <button type="button" onClick={toggleColorPicker} style={{
            marginLeft: '10px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            backgroundColor: '#17a2b8',
            color: '#fff'
          }}>Pick Color</button>
          {showColorPicker && (
            <ChromePicker
              color={color}
              onChange={handleColorChange}
              disableAlpha // Disable alpha channel
              styles={{ default: { picker: { position: 'absolute', zIndex: 1, top: '60px', left: '10px' } } }}
            />
          )}
        </div>
        <div style={{ marginTop: '10px' }}>
          <button type="submit" style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            backgroundColor: '#17a2b8',
            color: '#fff'
          }}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
