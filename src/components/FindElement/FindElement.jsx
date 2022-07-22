import PropTypes from 'prop-types';
import styles from './FindElement.module.css';
export const FindElement = ({ filter, hendleChangeFindElement }) => {
  return (
    <div className={styles.findForm}>
      <label className={styles.findForm}>
        Find contacts by name
        <input
          className={styles.inputFind}
          type="text"
          name="name"
          value={filter}
          onChange={hendleChangeFindElement}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

FindElement.propTypes = {
  filter: PropTypes.string,
  hendleChangeFindElement: PropTypes.func,
};
