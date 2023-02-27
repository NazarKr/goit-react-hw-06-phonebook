import css from './FilterForm.module.css';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filtersSlice';

export function FilterForm() {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const value = e.currentTarget.value.toLowerCase().trim();
    dispatch(setFilterValue(value));  };

  return (
    <input
      className={css.filterInput}
      type="text"
      id="filter"
      name="filter"
      placeholder="Contact name"
      onChange={handleFilter}
    />
  );
}
