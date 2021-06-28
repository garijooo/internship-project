import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
  const navClass = classNames(styles.nav, {
    [styles.hidden]: !isShown,
  });

  const onClickHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <nav className={navClass}>
      <ul>
        <li className={styles.selected}>
          <NavLink to="/">
            <AiOutlineRocket />
            <span className={!isShown && styles.hide}>Internship Streams</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <AiOutlineUser />
            <span className={!isShown && styles.hide}>Interns</span>
          </NavLink>
        </li>
      </ul>
      <div className={styles.change}>
        <AiOutlineMenuFold onClick={onClickHandler} className={!isShown && styles.hide} />
        <AiOutlineMenuUnfold className={isShown && styles.hide} onClick={onClickHandler} />
      </div>
    </nav>
  );
};

export default Navbar;
