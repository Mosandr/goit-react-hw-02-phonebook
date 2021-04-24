import { Component } from "react";
import shortId from "shortid";

import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onContactFormSubmit = (contactData) => {
    const id = shortId.generate();
    const { name, number } = contactData;
    const newContact = { id, name, number };

    this.setState(({ contacts }) => {
      return {
        contacts: [newContact, ...contacts],
      };
    });
  };

  onFilterChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  deleteContactById = (id) => {
    const { contacts } = this.state;
    const newContactList = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: newContactList });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.onContactFormSubmit}
          contacts={contacts}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={this.onFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContactById}
        />
      </Container>
    );
  }
}

export default App;
