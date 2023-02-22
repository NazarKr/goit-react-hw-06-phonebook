import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import css from './ContactItem.module.css';
import { MdClose } from 'react-icons/md';

export const ContactItem = ({ name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
