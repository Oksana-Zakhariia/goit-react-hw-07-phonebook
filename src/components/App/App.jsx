import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { getContacts } from 'redux/selectors';
import { getIsLoading } from 'redux/selectors';
import { getError } from 'redux/selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const { items, isLoading, error } = useSelector(getContacts);

//   console.log(items);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       {isLoading && <b>Loading tasks...</b>}
//       {error && <b>{error}</b>}
//       <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     </div>
//   );
// };
import { Container } from 'components/App/App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchBox } from 'components/SearchBox/Searchbox';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';

export const App = () => {
  const dispatch = useDispatch();
  // const { items, isLoading, error } = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Section title="Phonebook">
          <ContactForm></ContactForm>
          {isLoading && !error && <b>Request in progress...</b>}
        </Section>
        <Section title="Contacts">
          <SearchBox></SearchBox>
          <ContactList></ContactList>
        </Section>
      </Container>
    </ThemeProvider>
  );
};
