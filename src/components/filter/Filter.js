import React from 'react';
import { FilterLebel, FileterInput } from './Filter.styled';
import { useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const findFilter = event => {
    const form = event.currentTarget;
    dispatch(setFilter(form.value));
  };

  return (
    <FilterLebel>
      Find contac by name
      <FileterInput type="text" name="search" onChange={findFilter} />
    </FilterLebel>
  );
};

export default Filter;
