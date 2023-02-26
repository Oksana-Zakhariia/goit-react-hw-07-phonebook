import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './ContactList.styled';
const getVisibleContacts = (contacts, filter) => {
  const visibleContacts = [];
  contacts.filter(contact => {
    if (contact.name.includes(filter.toLowerCase())) {
      return visibleContacts.push(contact);
    }
    return visibleContacts;
  });
  return visibleContacts;
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(typeof filter);
  // console.log(contacts);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </List>
  );
};
