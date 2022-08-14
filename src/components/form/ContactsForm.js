import React from 'react';
import { ContainerForm, InputForm, ButtonForm } from './ContactsForm.styled';
import { addContanct } from 'redux/contactSlice';
import { useDispatch } from 'react-redux/es/exports';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux/es/exports';

const ContactsForm = () => {
  const { register, handleSubmit } = useForm();

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmitAdd = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already exist`);
    } else {
      dispatch(addContanct(data));
    }
  };

  return (
    <ContainerForm>
      <form
        onSubmit={handleSubmit(data => {
          handleSubmitAdd(data);
        })}
      >
        <label htmlFor="name">
          <h3>Name</h3>
          <InputForm
            type="text"
            name="name"
            {...register('name', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Name"
          />
        </label>
        <label>
          <h3>Number</h3>
          <InputForm
            htmlFor="number"
            type="tel"
            name="number"
            {...register('number', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Number"
          />
        </label>
        <ButtonForm type="submit">Add contacts</ButtonForm>
      </form>
    </ContainerForm>
  );
};

export default ContactsForm;
