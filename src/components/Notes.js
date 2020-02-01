import React from 'react';

export default function Notes({ notes, params }) {
  return (
    <ul className="notes-list">
      <h4 className="title">Notes</h4>
      {notes.map(note => {
        return (
          <li className="note" key={note.id}>
            {note.text}
          </li>
        );
      })}
    </ul>
  );
}
