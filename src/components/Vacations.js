import React from 'react';
import moment from 'moment';
//import qs from 'qs';

export default function Vacations({ vacations, removeVacation, params }) {
  console.log('vacations:', vacations);
  // const RenderVacations = () => {
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

//   return (
//     <div>
//       <h4>
//         <a
//           href={`#${qs.stringify({ view: 'vacations' })}`}
//           className={params.view === 'vacations' ? 'selected' : ''}
//         >
//           Vacations
//         </a>
//       </h4>
//       <p>You have {vacations.length} vacations</p>
//       {params.view === 'vacations' && <RenderVacations />}
//     </div>
//   );
// }
