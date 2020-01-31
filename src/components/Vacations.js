import React from 'react';
//import qs from 'qs';

export default function Vacations({ vacations, params }) {
  // const RenderVacations = () => {
  return (
    <ul>
      {vacations.map(vacation => {
        return (
          <li key={vacation.id}>
            {vacation.startDate} to {vacation.endDate}
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
