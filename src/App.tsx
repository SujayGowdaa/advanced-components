import { useRef } from 'react';
import Input from './components/Input';
import Form, { FormHandel } from './components/Form';
import Button from './components/Button';

function App() {
  const inputRef = useRef<HTMLInputElement>(null); // Optional: used for future input actions
  const resetRef = useRef<FormHandel>(null); // This ref will access the Form’s clear method

  // Handle the form submission
  function handleSave(data: unknown) {
    // Here's the code from the previous lecture, now adjusted to use "Type Guards" for "Type Narrowing":

    //  function handleSave(data: unknown) {
    //   // const extractedData = data as { name: string; age: string };
    //   if (
    //     !data ||
    //     typeof data !== 'object' ||
    //     !('name' in data) ||
    //     !('age' in data)
    //   ) {
    //       return;
    //   }

    //   // at this point, TypeScript knows that data MUST BE an object
    //   // with a name and age property
    //   // otherwise, the previous if statement would have returned
    //   console.log(data);
    //   customForm.current?.clear();
    // }

    // Type assertion to safely access expected fields
    const extractedData = data as {
      name: string;
      age: string;
    };
    console.log(extractedData);

    // Call the custom clear method on Form (if available)
    resetRef.current?.clear();
  }

  return (
    <main>
      {/* Attach custom ref and submit handler */}
      <Form onSave={handleSave} ref={resetRef}>
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
