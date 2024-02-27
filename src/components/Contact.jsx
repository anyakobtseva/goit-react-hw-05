import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import * as css from "./Contact.module.css";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <li className={css.card}>
      <div className={css.list}>
        <p className={css.contact}>
          <IoPerson size={20} /> {name}
        </p>
        <p className={css.contact}>
          <FaPhoneAlt size={20} /> {number}
        </p>
      </div>
      <div className={css.delete}>
        <button onClick={() => deleteContact(id)}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
