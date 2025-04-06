import { type FormEvent, type ComponentPropsWithoutRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (data: unknown) => void;
};

export default function Form({ onSave, ...props }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
}
