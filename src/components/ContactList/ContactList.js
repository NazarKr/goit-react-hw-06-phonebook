import { Button } from 'components/Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getContacts, getFilters } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';
import {
  ContactItemLi,
  ContactListUl,
  ContactName,
  ContactNumber,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilters);

  const handleContactRemove = id => dispatch(deleteContact(id));

  const visibleСontacts = (value, contacts) => {
    if (value) {
      const visibleСontacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(value)
      );
      if (visibleСontacts.length === 0) {
        Notify.failure('No contacts with this name', {
          showOnlyTheLastOne: true,
          position: 'right-bottom',
        });
      } else {
        return visibleСontacts;
      }
    }
    return contacts;
  };

  return (
    <ContactListUl>
      {visibleСontacts(filters.filterValue, contacts).map(contact => {
        const { id, name, number } = contact;

        return (
          <ContactItemLi key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <Button onClick={() => handleContactRemove(id)}>Delete</Button>
          </ContactItemLi>
        );
      })}
    </ContactListUl>
  );
};
