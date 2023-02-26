import { Filter, InputLabel } from './SearchBox.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from '../../redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  console.log(filter);

  const handleFilterChange = event =>
    dispatch(setContactsFilter(event.target.value));
  return (
    <InputLabel htmlFor="filter">
      Find contacts by name
      <Filter
        name="filter"
        type="text"
        // value={value}
        onChange={handleFilterChange}
      ></Filter>
    </InputLabel>
  );
};
