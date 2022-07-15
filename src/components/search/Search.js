import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { getCities } from '../../api';

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState();

    const loadOptions = (inputValue) => {
      return getCities(inputValue)
    }

    const handleChange = (searchDate) => {
        setSearch(searchDate);
        onSearchChange(searchDate);
    }
  return (
   <AsyncPaginate 
        placeholder="search for cities"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
   />
  )
}

export default Search