import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  AiOutlineRight, AiOutlineDown, AiOutlineDelete, AiOutlineEdit,
} from 'react-icons/ai';
import { ICON_SIZE_DEFAULT } from '../../constants';
import styles from './AddStreamModal.module.css';

const ThemesList = ({
  plan, opened, onDeleteTheme, onEditTheme, onChangeOpened,
}) => {
  const descriptionHiddenClass = classNames(styles.themedescription, styles.hidden);

  return (
    <ul className={styles.themeslist}>
      {plan.map((item, index) => (
        <li key={`themes-list-item-${index + 1}`} className={styles.themeitem}>
          <div className={styles.themeicon}>
            {index === opened
              ? <AiOutlineDown size={ICON_SIZE_DEFAULT} onClick={() => onChangeOpened(-1)} />
              : <AiOutlineRight size={ICON_SIZE_DEFAULT} onClick={() => onChangeOpened(index)} />}
          </div>
          <div className={styles.themename}>
            {item.themename}
          </div>
          <div className={index === opened ? styles.themedescription : descriptionHiddenClass}>
            {item.themedescription}
          </div>
          <div className={styles.themebottomicon}>
            <AiOutlineEdit
              size={ICON_SIZE_DEFAULT}
              onClick={() => onEditTheme(index)}
            />
            <AiOutlineDelete
              size={ICON_SIZE_DEFAULT}
              onClick={(plan.length === 1) ? null : () => onDeleteTheme(index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

ThemesList.propTypes = {
  plan: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  opened: PropTypes.number,
  onDeleteTheme: PropTypes.func.isRequired,
  onEditTheme: PropTypes.func.isRequired,
  onChangeOpened: PropTypes.func.isRequired,
};

ThemesList.defaultProps = {
  opened: -1,
};

export default ThemesList;
