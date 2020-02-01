import React from 'react';
import qs from 'qs';

export default function Home({ notes, vacations, followingCompanies, params }) {
  return (
    <div>
      <h1 className="title">Home</h1>
      <div className="home-container">
        <div className="circle">
          <h4>
            <a
              href={`#${qs.stringify({ view: 'notes' })}`}
              className={params.view === 'notes' ? 'selected' : ''}
            >
              Notes
            </a>
          </h4>
          <p>You have {notes.length} notes</p>
        </div>
        <div className="circle">
          <h4>
            <a
              href={`#${qs.stringify({ view: 'vacations' })}`}
              className={params.view === 'vacations' ? 'selected' : ''}
            >
              Vacations
            </a>
          </h4>
          <p>You have {vacations.length} vacations</p>
        </div>
        <div className="circle">
          <h4>
            <a
              href={`#${qs.stringify({ view: 'followingCompanies' })}`}
              className={params.view === 'followingCompanies' ? 'selected' : ''}
            >
              Following Companies
            </a>
          </h4>
          <p>You are following {followingCompanies.length} companies</p>
        </div>
      </div>
    </div>
  );
}
