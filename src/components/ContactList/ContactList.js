// import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.listItem}>
          <h2>{contact.name}</h2>
          <p>{contact.email}</p>
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
