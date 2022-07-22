import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

export const ContactItem = ({ id, name, number, contactDelete }) => {
  return (
    <li className={styles.item}>
      {name} : {number}
      <button
        className={styles.btnDel}
        type="button"
        onClick={() => contactDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
