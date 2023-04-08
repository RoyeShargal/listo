import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Register from './features/Logister/Register/Register';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Navbar />
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <p style={{ alignItems: 'center' }}>WELCOME TO LISTO!</p>
        <Register />
      </div>
    </StyledApp>
  );
}

export default App;
