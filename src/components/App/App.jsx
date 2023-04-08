import ContactForm from 'components/ContactForm';
import { MainContainer } from './App.styled';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const App = () => {
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
