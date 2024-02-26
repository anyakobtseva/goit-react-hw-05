import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

const ContactForm = ({ onSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const schema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Name too short!")
      .max(50, "Name too long!")
      .required(),
    number: Yup.string()
      .min(3, "Number too short!")
      .max(50, "Number too long!")
      .required(),
  });

  const initialValues = {
    username: "",
    number: "",
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values, actions) =>
        onSubmit(
          { id: nanoid(), name: values.username, number: values.number },
          actions
        )
      }
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}></label>
          <Field type="text" name="username" id={nameFieldId}></Field>
          <ErrorMessage name="username" as="span"></ErrorMessage>
        </div>
        <div>
          <label htmlFor={numberFieldId}></label>
          <Field type="text" name="number" id={numberFieldId}></Field>
          <ErrorMessage name="number" as="span"></ErrorMessage>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
