import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormButton, Input, FormLabel } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    console.log(values);
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`contact with name ${name} is already in contacts`);
      return;
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`contact with number ${number} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormLabel htmlFor="name">
              Name
              <Input name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </FormLabel>
            <FormLabel htmlFor="number">
              Number
              <Input name="number" />
              {errors.number && touched.number ? (
                <div>{errors.number}</div>
              ) : null}
            </FormLabel>

            <FormButton type="submit">Submit</FormButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};
