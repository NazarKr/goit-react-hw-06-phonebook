import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Button } from 'components/Buttons/Buttons';
import { addContact } from 'redux/contactSlice';
import css from './Contact.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const isDublicate = (title, author) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();
    const result = allContacts.find(({ title, author }) => {
      return (
        title.toLowerCase() === normalizedTitle &&
        author.toLowerCase() === normalizedAuthor
      );
    });

    return Boolean(result);
  };

  const handleSubmit = ({ name, number }) => {
     if (isDublicate(name, number)) {
       alert(`${name}. Author: ${number} is already ixist`);
       return false;
    }
    
    dispatch(addContact({ name, number }));

    console.log(addContact({ name, number }));
  };


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
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
