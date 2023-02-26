import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { getContacts } from 'redux/selectors';
import { getIsLoading } from 'redux/selectors';
import { getError } from 'redux/selectors';

import { Container } from 'components/App/App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchBox } from 'components/SearchBox/Searchbox';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';

export const App = () => {
  const dispatch = useDispatch();
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
        </Section>
        <Section title="Contacts">
          <SearchBox></SearchBox>
          <ContactList></ContactList>
          {isLoading && !error && <b>Request in progress...</b>}
        </Section>
      </Container>
    </ThemeProvider>
  );
};
