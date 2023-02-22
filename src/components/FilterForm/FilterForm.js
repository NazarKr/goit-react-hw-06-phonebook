import css from './FilterForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterReducer } from 'redux/filtersSlice';

export function FilterForm() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilter = event => {
    dispatch(filterReducer(event.currentTarget.value));
  };

  return (
    <input
      className={css.filterInput}
      type="text"
      value={filter}
      onChange={handleFilter}
      placeholder="Find contact by name"
    />
  );
}
