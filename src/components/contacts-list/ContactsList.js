// import { number } from 'prop-types';
import React from 'react';
import { ContactListLi, ContactTitle } from './ContactsList.styled';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contactSlice';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter)

 const filterByName = () => {
    const normalaizedFilter = filter.toLowerCase();
    const filtredContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalaizedFilter)
    );
    return filtredContacts;
  }
  return (
    <ul>
      <ContactTitle>Contacts</ContactTitle>
      {filterByName().map(({ id, name, number }) => (
        <ContactListLi key={id}>
          <span>
            {name}: {number}
          </span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </ContactListLi>
      ))}
    </ul>
  );
};

export default ContactsList;
