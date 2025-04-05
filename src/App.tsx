import Container from './components/Container';

function App() {
  return (
    <main>
      <p>
        <Container as='button'>Click me</Container>
      </p>
      <Container as='a'>Link me</Container>
    </main>
  );
}

export default App;
