
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import styles from './my-phonebook-filter.module.css'

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
    <div className={styles.wrraper}>
      <label className={styles.label}  htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        onChange={updateFilter}
        value={filter}
        className ={styles.filter}
      />
    </div>
  );
};

export default Filter;