import React from 'react';

export default function Header({ user }) {
  const changeUser = () => {
    window.localStorage.removeItem('userId');
  };
  return (
    <div className="header-container">
      <img src={user.avatar} />
      <h1>{user.email}</h1>
      <button onClick={changeUser}>Change User</button>
    </div>
  );
}
