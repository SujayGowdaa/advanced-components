import { useRef } from 'react';
import Input from './components/Input';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    const extractedData = data as {
      name: string;
      age: string;
    };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input label='name' id='name' ref={inputRef} />
        <Input label='age' id='age' type='number' ref={inputRef} />
        <p>
          <Button el='button'>Submit</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
