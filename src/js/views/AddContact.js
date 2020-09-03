import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = ({ history }, ...props) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form
					onSubmit={e => {
						if (!!store.id_contact) {
							e.preventDefault();
							actions.updateContact(e, store.id_contact.id, history);
						} else {
							e.preventDefault();
							actions.saveContact(history);
							e.target.reset();
						}
					}}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							required
							onChange={actions.handleChange}
							defaultValue={!!store.id_contact ? store.id_contact.full_name : ""}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							required
							onChange={actions.handleChange}
							defaultValue={!!store.id_contact ? store.id_contact.email : ""}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							required
							onChange={actions.handleChange}
							defaultValue={!!store.id_contact ? store.id_contact.phone : ""}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							required
							onChange={actions.handleChange}
							defaultValue={!!store.id_contact ? store.id_contact.address : ""}
						/>
					</div>
					<button className="btn btn-primary form-control">save</button>
					<Link className="mt-3 w-100 text-center" to="/" onClick={() => deleteID()}>
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

AddContact.propTypes = {
	history: PropTypes.object
};

export default AddContact;
