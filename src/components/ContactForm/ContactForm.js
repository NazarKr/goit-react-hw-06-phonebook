import { useDispatch } from 'react-redux';
import { Button } from 'components/Buttons/Buttons';
import { addContact } from 'redux/contactSlice';
import css from './Contact.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newContact = {
      id: Date.now(),
      name: formData.get('name'),
      number: formData.get('number'),
    };
    dispatch(addContact(newContact));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="name"
        name="name"
        placeholder="Enter  name..."
      />
      <input
        className={css.field}
        type="number"
        name="number"
        placeholder="Enter  number..."
      />
      <Button type="submit">Add Contact</Button>
    </form>
  );
};
