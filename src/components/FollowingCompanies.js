import React from 'react';

export default function FollowingCompanies({
  destroyFollowingCompany,
  followingCompanies,
  fcNames,
  params,
}) {
  //console.log('FollowingCompanies: ', followingCompanies);

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
