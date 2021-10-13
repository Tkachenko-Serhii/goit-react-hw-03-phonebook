import React from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import shortId from "shortid";

export default class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  getFormData = ({ name, number }) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(name + " is already in contacts");
      return;
    }

    const contact = { name, number, id: shortId.generate() };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  stateFilter = () =>
    this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

  onChangeFilter = (data) => {
    return this.setState({ filter: data.toLowerCase() });
  };

  onContactDel = (id) => {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  };

  render() {
    return (
      <div className='container'>
        <div className='addForm'>
          <h2 className='title'>Phonebook</h2>
          <Form onSubmit={this.getFormData} />
        </div>
        <h2 className='title'>Contacts</h2>
        <Filter
          stateFilter={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <ContactList
          contacts={this.stateFilter()}
          onContactDel={this.onContactDel}
        />
      </div>
    );
  }
}
