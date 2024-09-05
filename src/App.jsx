
import './App.css'
import UserList from './components/UserList';
import styled from 'styled-components';


const Wrapper = styled.div`
background-color: pink;

h1{
  text-align: center;
}
`;

function App() {
  return (
    <Wrapper>
      <h1>User List</h1>
      <UserList />
    </Wrapper>
  );
}

export default App;
