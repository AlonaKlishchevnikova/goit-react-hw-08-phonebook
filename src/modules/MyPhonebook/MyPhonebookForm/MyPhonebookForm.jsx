
import { useState } from 'react';
import { fetchAddContact } from '../../../redux/contacts/contacts-operations';



import { useDispatch, useSelector } from 'react-redux';
import styles from './my-phonebook-form.module.css';
import { nanoid } from 'nanoid'; 

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
 
 

  const handleSubmit = event => {
    event.preventDefault();
        const verificationContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (!verificationContact) {
    
      resetForm();
      return  dispatch(fetchAddContact({ name, number, id: nanoid()}));

    } else {
      alert(`${name} is already in contacts`);
    }
  

  };

  const resetForm = () => {
    setName('');
    setNumber('');

  };

  return (
    <form className={styles.form } onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={event => setName(event.target.value)}
        className={styles.input}
      />
      <label className={styles.label} htmlFor="number">
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={event => setNumber(event.target.value)}
        className={styles.input}
      />
      <button className={styles.btn} type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

