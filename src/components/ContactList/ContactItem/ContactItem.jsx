import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

export default function ContactItem({ contact, onContactDel }) {
  return (
    <li className={s.item}>
      <p className={s.contact}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={s.button}
        onClick={(e) => onContactDel(e.target.id)}
        id={contact.id}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
