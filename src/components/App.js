import { Layout } from './Layouy/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { FilterForm } from './FilterForm/FilterForm';
// import { ContactList } from './ContactList/ContactList';
// import { getContacts } from "redux/selectors";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Layout>
      <AppBar />
      <ContactForm />
      {/* <FilterForm /> */}
      {/* <ContactList contacts={contacts} /> */}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
