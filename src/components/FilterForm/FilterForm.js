import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filtersSlice';
import { FilterContainer, FilterInput } from './FilterForm.styled';

export function FilterForm() {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const value = e.currentTarget.value.toLowerCase().trim();
    dispatch(setFilterValue(value));
  };

  return (
    <FilterContainer>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        placeholder="Search contact"
        onChange={handleFilter}
      />
    </FilterContainer>
  );
}
