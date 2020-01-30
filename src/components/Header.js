import React from 'react';
import qs from 'qs';

export default function Header({ user, changeUser, params }) {
  return (
    <div className="header-container">
      <a
        href={`#${qs.stringify({ view: 'home' })}`}
        className={params.view === 'home' ? 'selected' : ''}
      >
        <img src={user.avatar} />
      </a>
      <h1>{user.email}</h1>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
}
