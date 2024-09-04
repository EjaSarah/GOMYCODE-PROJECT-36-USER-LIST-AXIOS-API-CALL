import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components
const UserContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const UserCard = styled.div`
  border: 1px solid #ccc;
  background-color: blue;
  padding: 15px;
  margin: 15px;
  width: 350px;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <UserContainer>
      {listOfUser.map((user) => (
        <UserCard key={user.id}>
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </UserCard>
      ))}
    </UserContainer>
  );
};

export default UserList;
