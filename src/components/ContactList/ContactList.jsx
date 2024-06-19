import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contactsItem}>
          <Contact key={contact.id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
