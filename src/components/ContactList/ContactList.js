import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';


export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          <ContactItem name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
