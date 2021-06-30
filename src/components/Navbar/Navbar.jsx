import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  const spanClass = classNames(styles.text, {
    [styles.hideSpan]: !isShown,
  });
  const streamsItemClass = classNames({
    [styles.selected]: location.pathname === '/streams/finished',
  });

  const onClickHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <nav className={navClass}>
      <ul>
        <li className={styles.item}>
          {/* <NavLink
            to="/streams/current"
            activeClassName={styles.selected}
            className={streamsItemClass}
          >
            <AiOutlineRocket />
            <span className={spanClass}>Internship Streams</span>
          </NavLink> */}
          <NavLink to="/streams/current" activeClassName={styles.selected} className={streamsItemClass}>
            <span className={styles.icon}><AiOutlineRocket /></span>
            <span className={spanClass}>
              Internship Streams
            </span>
          </NavLink>
        </li>
        <li className={styles.item}>
          {/* <NavLink to="/interns" activeClassName={styles.selected}>
            <AiOutlineUser />
            <span className={spanClass}>Interns</span>
          </NavLink> */}
          <NavLink to="/interns" activeClassName={styles.selected}>
            <span className={styles.icon}><AiOutlineUser /></span>
            <span className={spanClass}>
              Interns
            </span>
          </NavLink>
          {/* <AiOutlineUser /> */}
          {/* <span className={spanClass}>Interns</span> */}
          {/* <NavLink to="/interns" activeClassName={styles.selected}>
            <AiOutlineUser />
            <span className={spanClass}>Interns</span>
          </NavLink> */}
        </li>
      </ul>
      <div className={styles.change}>
        <AiOutlineMenuFold onClick={onClickHandler} className={!isShown && styles.hideIcon} />
        <AiOutlineMenuUnfold
          className={isShown && styles.hideIcon}
          onClick={onClickHandler}
        />
      </div>
    </nav>
  );
};

export default Navbar;
