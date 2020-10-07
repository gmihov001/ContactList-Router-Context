import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);

	var contact = store.agenda.filter(item => item.id == props.match.params.id);
	console.log(contact);

	const [updatedContact, setUpdatedContact] = useState({
		name: contact[0].full_name,
		address: contact[0].address,
		phone: contact[0].phone,
		email: contact[0].email,
		id: contact[0].id
	});

	const handleChange = e => {
		setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							name="name"
							className="form-control"
							value={updatedContact.name}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							className="form-control"
							value={updatedContact.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							value={updatedContact.phone}
							onChange={e => setUpdatedContact({ ...updatedContact, phone: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							value={updatedContact.address}
							onChange={e => setUpdatedContact({ ...updatedContact, address: e.target.value })}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() =>
								actions.editContact(
									updatedContact.name,
									updatedContact.address,
									updatedContact.phone,
									updatedContact.email,
									updatedContact.id
								)
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
