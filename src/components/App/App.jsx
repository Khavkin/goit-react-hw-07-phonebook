import ContactForm from 'components/ContactForm';
import { MainContainer } from './App.styled';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('App useEffect');
    //getContacts();
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </MainContainer>
  );
};

export default App;
