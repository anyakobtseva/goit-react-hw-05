import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import inititalContacts from "../contacts.json";

const App = () => {
  const [filteredContacts, setFilteredContacts] = useState(inititalContacts);

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("contacts")) || inititalContacts
    );
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
    setFilteredContacts(contacts);
  }, [contacts]);

  const addContact = (newContact, actions) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    actions.resetForm();
  };

  const filterContacts = (evt) => {
    setSearchValue(evt.target.value);
    setFilteredContacts(
      contacts.filter(
        (contact) =>
          contact.name &&
          contact.name.toLowerCase().startsWith(evt.target.value.toLowerCase())
      )
    );
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id && contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1 style={{ marginLeft: "10px" }}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filterContacts} searchValue={searchValue} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
