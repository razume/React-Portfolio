import React from 'react';

export default function Notes({ notes, params }) {
  return (
    <ul>
      {notes.map(note => {
        return <li key={note.id}>{note.text}</li>;
      })}
    </ul>
  );
}
