
import React, { Component } from "react";
import Phonebook from "./components/Phonebook/Phonebook";
import contacts from './components/Contacts/contacts.json'
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts";
import shortid from "shortid";
import s from './components/Contacts/Contacts.module.css'

//model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"


class App extends Component{
  state = {
   contacts: [],
  filter: '',

  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({contacts: parseContacts})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = values => {
    const { contacts } = this.state;
    const repeated = contacts.find(contact => {
      return contact.name.toLowerCase() === values.name.toLowerCase();
    });
    if (repeated) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name: values.name,
      number: values.number
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
   
  };

  	deleteContact = cardId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== cardId),
		}));
    };
  
  	filterChange = e => {
		this.setState({ filter: e.target.value });
	};

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedFilter),
		)
    return (
      <div className={s.container}>
        <h2 >Phonebook</h2>
        
        <Phonebook addContact={this.addContact} />
        
        <Filter onFilterChange={this.filterChange} value={filter} />

        <Contacts contacts={visibleContact} deleteContact={this.deleteContact} />
        
      </div> 
      
    )
  }
}

export default App;