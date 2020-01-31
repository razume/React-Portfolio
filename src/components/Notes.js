import React from 'react';
//import qs from 'qs';
//{ notes };

export default function Notes({ notes, params }) {
  // const RenderNotes = () => {

  return (
    <ul>
      {notes.map(note => {
        return <li key={note.id}>{note.text}</li>;
      })}
    </ul>
  );
}

// return (
//   <div>
//     <h4>
//       <a
//         href={`#${qs.stringify({ view: 'notes' })}`}
//         className={params.view === 'notes' ? 'selected' : ''}
//       >
//         Notes
//       </a>
//     </h4>
//     <p>You have {notes.length} notes</p>
//     {params.view === 'notes' && <RenderNotes />}
//   </div>
// );
//}
