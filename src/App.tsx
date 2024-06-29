// src/App.tsx

import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

const App: React.FC = () => {
  // Define a placeholder onClose function
  const handleCloseForm = () => {
    // Implement logic to handle closing or saving the note form
    console.log('Closing or saving note form');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Note Taking App</h1>
      </header>
      <main className="App-main">
        <NoteForm onClose={handleCloseForm} /> {/* Pass onClose function as prop */}
        <NoteList />
      </main>
      <footer className="App-footer">
        Made By Aaryan Sharma
      </footer>
    </div>
  );
};

export default App;
