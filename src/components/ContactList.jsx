import Contact from "./Contact";
import * as css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={css.ul}>
        {contacts.map((contact) => (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
