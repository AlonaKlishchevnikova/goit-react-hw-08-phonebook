
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchDeleteContact, fetchAllContacts } from 'redux/contacts/contacts-operations';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import styles from './my-phonebook-list.module.css'

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

 useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    
    <ul className={styles.contactList }>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button className={styles.btn }
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