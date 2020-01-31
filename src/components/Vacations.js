import React from 'react';
import moment from 'moment';

export default function Vacations({ vacations, removeVacation, params }) {
  //console.log('vacations:', vacations);

  return (
    <ul>
      {vacations.map(vacation => {
        return (
          <li key={vacation.id}>
            <p>
              Start Date:{' '}
              {moment(vacation.startDate).format('dddd, MM/DD/YYYY')}
            </p>
            <p>
              End Date: {moment(vacation.endDate).format('dddd, MM/DD/YYYY')}
            </p>
            <p>
              {moment(vacation.endDate).diff(
                moment(vacation.startDate),
                'days'
              )}{' '}
              days
            </p>

            <button
              onClick={() => {
                removeVacation(vacation);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}
