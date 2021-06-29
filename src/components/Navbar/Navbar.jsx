import React, { useState } from 'react';
import {
  NavLink,
  useLocation,
} from 'react-router-dom';
import {
  AiOutlineUser,
  AiOutlineRocket,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from 'react-icons/ai';
import classNames from 'classnames';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isShown, setIsShown] = useState(true);
  const location = useLocation();
  const navClass = classNames(styles.nav, {
    [styles.hidden]: !isShown,
  });
  const spanClass = classNames({
    [styles.hide]: !isShown,
  });
  const itemClass = classNames({
    [styles.selected]: location.pathname === '/streams/current'
    || location.pathname === '/streams/finished',
  });

  const checkActive = () => (location.pathname === '/');
  const onClickHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <NavLink to="/" isActive={checkActive} activeClassName={styles.selected} className={itemClass}>
            <AiOutlineRocket />
            <span className={spanClass}>Internship Streams</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/interns" activeClassName={styles.selected}>
            <AiOutlineUser />
            <span className={spanClass}>Interns</span>
          </NavLink>
        </li>
      </ul>
      <div className={styles.change}>
        <AiOutlineMenuFold onClick={onClickHandler} className={spanClass} />
        <AiOutlineMenuUnfold className={isShown && styles.hide} onClick={onClickHandler} />
      </div>
    </nav>
  );
};

export default Navbar;
