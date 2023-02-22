import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { ContactButton, ContactItem } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactItem id={contact.id}>
      <div>
        <span>{contact.name} </span>
        <span>{contact.number}</span>
      </div>
      <ContactButton onClick={handleDelete}>Delete</ContactButton>
    </ContactItem>
  );
};
