import MyPhonebookForm from '../../modules/MyPhonebook/MyPhonebookForm/MyPhonebookForm';
import MyPhonebookFilter from '../../modules/MyPhonebook/MyPhonebookFilter/MyPhonebookFilter';
import MyPhonebookList from '../../modules/MyPhonebook/MyPhonebookList/MyPhonebookList';
import styles from './contacts-page.css';

const ContactsPage = () => {
    return (
        <div className={styles.wrapper}>
             <MyPhonebookForm />
      <MyPhonebookFilter />
      <MyPhonebookList />
        </div>
    )

}
export default ContactsPage;