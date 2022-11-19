import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const [filterValue, setFilterValue] = useState('');

  const dispatch = useDispatch();

  const handleFilterChange = e => {
    e.preventDefault();
    setFilterValue(e.target.value);
    dispatch(filterContacts(e.target.value));
  };
  return (
    <FilterBox>
      <FilterLabel htmlFor="filter">Find contact by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </FilterBox>
  );
};
