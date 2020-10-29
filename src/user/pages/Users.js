import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Omar Mussehl',
      image:
        'https://pbs.twimg.com/profile_images/454860112851509249/uflv0pHz_400x400.jpeg',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
