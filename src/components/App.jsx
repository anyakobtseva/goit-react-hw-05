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

  const addContact = (newContact) => setContacts((prevContacts) => [...prevContacts, newContact]);

  const filterContacts = (evt) => {
    setSearchValue(evt.target.value);
    setFilteredContacts(
      contacts.filter(
        (contact) => 
          contact.name &&
          contact.name.toLowerCase().split(' ').some(c => c.startsWith(evt.target.value.toLowerCase()))
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
      <SearchBox onChange={filterContacts} value={searchValue} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
