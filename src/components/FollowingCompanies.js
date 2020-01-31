import React from 'react';
//import qs from 'qs';

export default function FollowingCompanies({
  destroyFollowingCompany,
  followingCompanies,
  fcNames,
  params,
}) {
  //const RenderFollowingCompanies = () => {
  console.log('FollowingCompanies: ', followingCompanies);
  return (
    <ul>
      {fcNames.map(followingCompany => {
        return (
          <li key={followingCompany.id}>
            {followingCompany.rating} and {followingCompany.name}
            <button onClick={() => destroyFollowingCompany(followingCompany)}>
              Unfollow
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
