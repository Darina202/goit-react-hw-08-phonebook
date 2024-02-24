import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/contacts/operations';
import { changeFitler } from '../../redux/filter-slice';
import {
  selectAllContacts,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import styles from './phonebook.module.css';
import { useEffect } from 'react';

const Phonebook = () => {
  const { isLoading, error } = useSelector(selectAllContacts);
  const items = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredContact = ({ name }) => {
  //   const normalizeName = name.toLowerCase();
  //   const dublicate = contacts.find(item => {
  //     const normalizedCurrentName = item.name.toLowerCase();
  //     return normalizedCurrentName === normalizeName;
  //   });
  //   return Boolean(dublicate);
  // };

  const toAddContact = data => {
    // if (filteredContact(data)) {
    //   return alert(`Contact ${data.name} already in list`);
    // }
    dispatch(addContact(data));
  };

  const toDeleteContact = id => dispatch(deleteContact(id));

  const toChangeFitler = ({ target }) => dispatch(changeFitler(target.value));

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={toAddContact} />
      <h2>Contacts</h2>
      <p className={styles.text}>Find contact by name</p>
      <input
        type="text"
        name="filter"
        onChange={toChangeFitler}
        className={styles.filter}
      />
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {Boolean(items.length) && (
        <ContactList items={items} deleteContact={toDeleteContact} />
      )}
    </div>
  );
};

export default Phonebook;
