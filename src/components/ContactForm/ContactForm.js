import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Button } from 'components/Buttons/Buttons';
import { addContact } from 'redux/contactSlice';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import {
  PhonebookForm as Form,
  Input,
  Label,
  Error,
} from './ContactForm.styled';


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Number is not valid')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleContactAdd = contact => dispatch(addContact(contact));

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        tel: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={({ firstName, lastName, tel }, { resetForm }) => {
        const name = (firstName, lastName) => {
          if (lastName) {
            return firstName.trim() + ' ' + lastName.trim();
          }
          return firstName.trim();
        };

        const contact = {
          id: nanoid(),
          name: name(firstName, lastName),
          number: tel.trim(),
        };

        handleContactAdd(contact);
        toast.info('Contact was add');
        resetForm();
      }}
    >
      <Form>
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" name="firstName" placeholder="Name" />
        <ErrorMessage name="firstName" component={Error} />

        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" name="lastName" placeholder="Last name" />
        <ErrorMessage name="lastName" component={Error} />

        <Label htmlFor="tel">Phone</Label>
        <Input id="tel" name="tel" placeholder="Phone" type="tel" />
        <ErrorMessage name="tel" component={Error} />

        <Button type="submit" disabled={false} children="Add contact"></Button>
      </Form>
    </Formik>
  );
};
