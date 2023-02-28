import { Button } from 'components/Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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

  const handleContactRemove = id => {
    dispatch(deleteContact(id))
    toast.info('Contact was deleted')
  };

  const visibleСontacts = (value, contacts) => {
    if (value) {
      const visibleСontacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(value)
      );
      if (visibleСontacts.length === 0) {
    toast.success('No contact whit this name');
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
