import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMore } from 'react-icons/ai';
import classNames from 'classnames';
import OptionalMenu from '../OptionalMenu/OptionalMenu';
import styles from './StreamsList.module.css';

const ListRow = ({
  stream,
  index,
  onClickHandler,
  currentExpand,
}) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  const statusClass = classNames({
    [styles.oncoming]: stream.status === 'Oncoming',
    [styles.active]: stream.status === 'Active',
    [styles.paused]: stream.status === 'Paused',
  });

  const submenuClass = classNames(styles.submenu, {
    [styles.hidden]: currentExpand !== index,
  });
  const iconClass = classNames({
    [styles.expanded]: currentExpand === index,
  });

  const onExpand = () => {
    if (currentExpand === index) onClickHandler(null);
    else onClickHandler(index);
  };

  return (
    <tr className={styles.row}>
      <td className={styles.name}>{stream.name}</td>
      <td>{stream.date}</td>
      <td>{stream.duration}</td>
      <td>{stream.interns}</td>
      <td>{stream.mentor}</td>
      <td>{stream.lead}</td>
      <td><span className={statusClass}>{stream.status}</span></td>
      <td>
        <div className={styles.more}>
          <div className={submenuClass}>
            <OptionalMenu />
          </div>
          <AiOutlineMore onClick={onExpand} className={iconClass} />
        </div>
      </td>
    </tr>
  );
};

ListRow.propTypes = {
  stream: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    interns: PropTypes.number.isRequired,
    mentor: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  currentExpand: PropTypes.number,
};

ListRow.defaultProps = {
  currentExpand: null,
};

export default ListRow;
