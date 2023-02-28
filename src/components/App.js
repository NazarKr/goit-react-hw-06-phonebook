import { useSelector } from 'react-redux';
import { Layout } from './Layouy/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { FilterForm } from './FilterForm/FilterForm';
import { ContactList } from './ContactList/ContactList';
import { getContacts } from 'redux/selectors';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <AppBar />
        <ContactForm />
        <FilterForm />
        {contacts.length > 0 && <ContactList />}
      </Layout>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        transition={Zoom}
        draggable
        Transition="zoom"
      />
    </PersistGate>
  );
};
