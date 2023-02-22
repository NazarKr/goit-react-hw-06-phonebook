import { Layout } from "./Layouy/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { FilterForm } from './FilterForm/FilterForm';
// import { ContactList } from './ContactList/ContactList';

export const App = () => {
    
  return (
    <Layout>
      <AppBar />
      <ContactForm />
      {/* <FilterForm /> */}
      {/* <ContactList /> */}
    </Layout>
  );
};
