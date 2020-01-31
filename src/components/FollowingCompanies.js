import React from 'react';
//import qs from 'qs';

export default function FollowingCompanies({ followingCompanies, params }) {
  //const RenderFollowingCompanies = () => {
  return (
    <ul>
      {followingCompanies.map(followingCompany => {
        return (
          <li key={followingCompany.id}>
            {followingCompany.rating} and {followingCompany.companyId}
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
//           href={`#${qs.stringify({ view: 'followingCompanies' })}`}
//           className={params.view === 'followingCompanies' ? 'selected' : ''}
//         >
//           Following Companies
//         </a>
//       </h4>
//       <p>You are following {followingCompanies.length} companies</p>
//       {params.view === 'followingCompanies' && <RenderFollowingCompanies />}
//     </div>
//   );
// }
