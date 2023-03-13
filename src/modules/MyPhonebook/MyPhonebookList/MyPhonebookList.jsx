
import { useSelector, useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;