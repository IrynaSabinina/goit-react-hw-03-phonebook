import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import styles from './Contacts.module.css';
export const ContactsList = ({ contacts, contactDelete }) => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              contactDelete={contactDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  contactDelete: PropTypes.func.isRequired,
};
