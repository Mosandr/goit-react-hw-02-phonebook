import { Component } from "react";
import shortId from "shortid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

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
    const { contacts } = this.state;
    const newContact = { id, name, number };

    this.setState(({ contacts }) => {
      return {
        contacts: [newContact, ...contacts],
      };
    });
  };

  deleteContactById = (id) => {
    const { contacts } = this.state;
    const newContactList = contacts.filter((contact) => contact.id !== id);
    console.log(newContactList);
    this.setState({ contacts: newContactList });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onContactFormSubmit} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDelete={this.deleteContactById} />
      </div>
    );
  }
}

export default App;
