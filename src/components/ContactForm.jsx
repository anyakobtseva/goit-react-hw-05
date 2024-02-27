import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as css from "./ContactForm.module.css";

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
      <Form className={css.wind}>
        <div className={css.form}>
          <h2 className={css.name}>Name</h2>
          <label htmlFor={nameFieldId}></label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
          ></Field>
          <ErrorMessage name="username" as="span"></ErrorMessage>
        </div>
        <div className={css.form}>
          <h2 className={css.name}>Number</h2>
          <label htmlFor={numberFieldId}></label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
          ></Field>
          <ErrorMessage name="number" as="span"></ErrorMessage>
        </div>
        <div className={css.form}>
          <button className={css.btnadd} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
