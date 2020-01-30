import React from 'react';

export default function Header({ user }) {
  return (
    <div className="header-container">
      <img src={user.avatar} />
      <h1>{user.email}</h1>
      <button>Change User</button>
    </div>
  );
}
