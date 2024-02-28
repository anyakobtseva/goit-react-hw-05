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

  useEffect(
    () => window.localStorage.setItem("contacts", JSON.stringify(contacts)),
    [contacts]
  );

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(
        (contact) =>
          contact.name &&
          contact.name
            .toLowerCase()
            .split(" ")
            .some((c) => c.startsWith(searchValue.toLowerCase()))
      )
    );
  }, [contacts, searchValue]);

  const addContact = (newContact) =>
    setContacts((prevContacts) => [...prevContacts, newContact]);

  const updateSearchValue = (newValue) => setSearchValue(newValue);

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id && contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1 style={{ marginLeft: "10px" }}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox onChange={updateSearchValue} value={searchValue} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
