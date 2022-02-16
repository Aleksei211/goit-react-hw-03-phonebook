import propTypes from "prop-types";
import s from '../components/Contacts/Contacts.module.css'

const Contacts = ({ contacts, deleteContact }) => (
	<>
		<ul className={s.contacts}>
			{contacts.map(({ id, name, number }) => (
				<li  key={id} className={s.contact}>
					<p >
						{name}: {number}
					</p>
					<div >
						<button
							
							onClick={() => deleteContact(id)}
						>
							Delete
						</button>
					</div>
				</li>
			))}
		</ul>
	</>
);

export default Contacts;
Contacts.propTypes = {
    contacts: propTypes.array,
    deleteContact: propTypes.func

}