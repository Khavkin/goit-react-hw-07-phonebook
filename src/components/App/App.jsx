import ContactForm from 'components/ContactForm';
import { MainContainer } from './App.styled';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loadding....</p>}
      {error && <p>Error- {error}</p>}
      <ContactList />
    </MainContainer>
  );
};

export default App;
