import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactBox}>
      <div className={css.contactText}>
        <p>
          <IoPerson /> {contact.name}
        </p>
        <p>
          <FaPhoneAlt /> {contact.number}
        </p>
      </div>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
