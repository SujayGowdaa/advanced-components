import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

// Extend built-in form props (like onSubmit, className, etc.) and add custom prop `onSave`
type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (data: unknown) => void;
};

// Custom type for the object we'll expose through ref
export type FormHandel = {
  clear: () => void;
};

// Using `forwardRef` to expose custom functions (like clear) to parent
const Form = forwardRef<FormHandel, FormProps>(function Form(
  { onSave, ...props }, // destructuring to pull out onSave and collect other props
  ref // this ref will be passed from the parent
) {
  const form = useRef<HTMLFormElement>(null); // Ref to access the actual form DOM element

  // Use `useImperativeHandle` to expose custom methods through the ref
  useImperativeHandle(ref, () => {
    return {
      clear() {
        // Custom method to reset the form
        form.current?.reset();
      },
    };
  });

  // Handle form submission
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault(); // Prevent page reload

    const formData = new FormData(event.currentTarget); // Extract data from form
    const data = Object.fromEntries(formData); // Convert FormData to plain object

    onSave(data); // Pass the form data to the parent
  }

  return (
    // Spread remaining props (like className, etc.), attach submit handler and form ref
    <form onSubmit={handleSubmit} {...props} ref={form}>
      {props.children}
    </form>
  );
});

export default Form;
