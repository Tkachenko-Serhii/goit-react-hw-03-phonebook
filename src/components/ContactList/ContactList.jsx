import PropTypes from "prop-types";

import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onContactDel }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onContactDel={onContactDel}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
