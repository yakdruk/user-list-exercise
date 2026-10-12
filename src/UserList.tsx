import { useEffect, useState } from 'react';
import { getUserData, type User } from './api';

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUserData().then((user) => setUsers([user]));
  }, []);

  const addUser = async () => {
    const user = await getUserData();
    setUsers([...users, user]);
  };

  const removeUser = (uuid: string) => {
    setUsers(users.filter((u) => u.login.uuid !== uuid));
  };

  return (
    <div className="user-list">
      <ul>
        {users.map((user, index) => (
          <li key={user.login.uuid}>
            {index + 1} {user.name.title} {user.name.first} {user.name.last}
            <button onClick={() => removeUser(user.login.uuid)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addUser}>Add User</button>
    </div>
  );
}
