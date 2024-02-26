import Contact from "./Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
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
