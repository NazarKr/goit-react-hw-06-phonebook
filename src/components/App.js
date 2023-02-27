import { useSelector } from 'react-redux';
import { Layout } from './Layouy/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { FilterForm } from './FilterForm/FilterForm';
import { ContactList } from './ContactList/ContactList';
import { getContacts } from "redux/selectors";

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Layout>
      <AppBar />
      <ContactForm />
      <FilterForm />
      {contacts.length > 0 &&  <ContactList/>}
    </Layout>
  );
};
