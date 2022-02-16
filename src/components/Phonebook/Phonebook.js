import React, { Component } from "react";
import propTypes from "prop-types";
import s from '../Phonebook/Phonebook.module.css'

class Phonebook extends Component {
	state = {
		name: '',
		number: '',
	};

	formSubmit = e => {
		e.preventDefault();
		this.props.addContact(this.state);
		this.reset();
	};

	inputName = e => {
		this.setState({ name: e.target.value });
		
	};

	inputNumber = e => {
		this.setState({ number: e.target.value });
	};

	reset = () => {
        this.setState({ name: '', number: '' })
    };

	render() {
		const { name, number } = this.state;
		return (
			<>

				<form  onSubmit={this.formSubmit}>
					<div >
						<label className={s.name}>Name</label>
						<input
							
							value={name}
							onChange={this.inputName}
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
							required
						/>
					</div>
					<div >
						<label className={s.name}>Number</label>
						<input
							
							value={number}
							onChange={this.inputNumber}
							type="tel"
							name="number"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
							required
						/>
					</div>
					<div >
						<button disabled={!number} type="submit">
							Add contact
						</button>
					</div>
				</form>
			</>
		);
	}
}

export default Phonebook;
Phonebook.propTypes = {
    contacts: propTypes.array
}