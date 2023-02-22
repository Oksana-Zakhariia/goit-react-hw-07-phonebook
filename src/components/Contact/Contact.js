import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { ContactButton, ContactItem } from './Contact.styled';

export const Contact = item => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(item.id));
  return (
    <ContactItem id={item.id}>
      <div>
        <span>{item.name} </span>
        <span>{item.number}</span>
      </div>
      <ContactButton onClick={handleDelete}>Delete</ContactButton>
    </ContactItem>
  );
};
