import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";

export const Contacts = (...props) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{!!store.contacts &&
							store.contacts.map((contact, index) => <ContactCard key={index} contact={contact} />)}
					</ul>
				</div>
			</div>
			<Modal show={store.show_modal} onClose={() => setStore({ show_modal: false })} />
		</div>
	);
};

export default Contacts;
