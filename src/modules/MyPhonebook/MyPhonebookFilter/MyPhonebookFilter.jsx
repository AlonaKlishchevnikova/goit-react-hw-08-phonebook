
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };

  const updateFilter = event => {
    onSetFilter(event.target.value);
  };

  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  return (
    <div>
      <label  htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        onChange={updateFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;