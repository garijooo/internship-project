import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Options from '../Options';
import Option from '../Options/Option';
import styles from './FilterOptions.module.css';
import getUnique from '../../utils/getUniqueValues';

const FilterOptions = ({
  field, active, current, onFilterAction, isCurrent,
}) => {
  const filterOptionsClass = classNames(styles.submenu, {
    [styles.hidden]: active !== current,
  });

  const streams = useSelector((state) => state.auth.streams);
  const updated = isCurrent
    ? (streams ?? []).filter((item) => item.status !== 'Finished')
    : (streams ?? []).filter((item) => item.status === 'Finished');

  return (
    <div className={filterOptionsClass}>
      <Options>
        {getUnique(field, updated).map((item, index) => (
          <Option key={`filter-${index + 1}`}>
            <span
              role="button"
              tabIndex={0}
              onClick={() => onFilterAction(field, item)}
              onKeyDown={() => onFilterAction(field, item)}
            >
              {item}
            </span>
          </Option>
        ))}
      </Options>
    </div>
  );
};

FilterOptions.propTypes = {
  field: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onFilterAction: PropTypes.func,
  isCurrent: PropTypes.bool.isRequired,
};

FilterOptions.defaultProps = {
  onFilterAction: null,
};

export default FilterOptions;
