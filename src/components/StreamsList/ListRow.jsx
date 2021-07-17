import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMore } from 'react-icons/ai';
import classNames from 'classnames';
import TableAvatar from '../TableAvatar/TableAvatar';
import Options from '../Options/Options';
import styles from './StreamsList.module.css';

const ListRow = ({
  stream, index, onClickHandler, currentExpand,
}) => {
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
      <td className={styles.title}>{stream.title}</td>
      <td>{stream.date}</td>
      <td>
        {stream.duration < 2
          ? `${stream.duration} day`
          : `${stream.duration} days`}
      </td>
      <td>{stream.interns}</td>
      <td>
        <div className={styles.user}>
          <TableAvatar image={stream.mentorAvatar} />
          {stream.mentor}
        </div>
      </td>
      <td>
        <div className={styles.user}>
          <TableAvatar image={stream.leadAvatar} />
          {stream.lead}
        </div>
      </td>
      <td>
        <span className={statusClass}>{stream.status}</span>
      </td>
      <td>
        <div className={styles.more}>
          <div className={submenuClass}>
            <Options />
          </div>
          <AiOutlineMore onClick={onExpand} className={iconClass} />
        </div>
      </td>
    </tr>
  );
};

ListRow.propTypes = {
  stream: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.number,
    interns: PropTypes.number,
    mentor: PropTypes.string,
    mentorAvatar: PropTypes.string,
    lead: PropTypes.string,
    leadAvatar: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  currentExpand: PropTypes.number,
};

ListRow.defaultProps = {
  currentExpand: null,
};

export default ListRow;
