import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const [updatedContact, setUpdatedContact] = useState({
		name: null,
		address: null,
		phone: null,
		email: null
	});
	const { store, actions } = useContext(Context);
	var contact = store.agenda.filter(item => item.id == props.match.params.id);
	console.log(contact);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder={contact[0].full_name}
							onChange={e => setUpdatedContact({ ...contact, name: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => setUpdatedContact({ ...contact, email: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setUpdatedContact({ ...contact, phone: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => setUpdatedContact({ ...contact, address: e.target.value })}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							disabled={!contact.name || !contact.address || !contact.phone || !contact.email}
							onClick={() =>
								actions.editContact(contact.name, contact.address, contact.phone, contact.email)
							}>
							SAVE
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
