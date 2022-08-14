import React from 'react';
import { Container, ContainerTitle } from 'components/App.styled';
import ContactsForm from './form/ContactsForm';
import Filter from './filter/Filter';
import ContactsList from './contacts-list/ContactsList';

const App = () => {

  return (
    <Container>
      <ContainerTitle>Phonebook</ContainerTitle>
      <ContactsForm/>
     <Filter/>
      <ContactsList />
    </Container>
  );
};

export default App;

