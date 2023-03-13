import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from '../redux/contacts/contacts-operations';


import MyPhonebookForm from '../modules/MyPhonebook/MyPhonebookForm/MyPhonebookForm';
import MyPhonebookList from '../modules/MyPhonebook/MyPhonebookList/MyPhonebookList';
import MyPhonebookFilter from '../modules/MyPhonebook/MyPhonebookFilter/MyPhonebookFilter';

const App = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <MyPhonebookForm />
      <h2>Contacts</h2>
      <MyPhonebookFilter />
      <MyPhonebookList />
    </div>
  );
};

export default App;