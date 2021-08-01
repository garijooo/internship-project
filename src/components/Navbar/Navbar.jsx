import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AiOutlineUser,
  AiOutlineRocket,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from 'react-icons/ai';
import classNames from 'classnames';
import updateNavbarView from '../../store/options/actions';
import { ICON_SIZE_NAVBAR } from '../../constants';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const options = useSelector((state) => state.options);

  const navClass = classNames(styles.nav, {
    [styles.hidden]: !options.navbarIsOpen,
  });
  const textElementClass = classNames(styles.text, {
    [styles.hideSpan]: !options.navbarIsOpen,
  });
  const streamsItemClass = classNames({
    [styles.selected]: location.pathname === '/streams/finished',
  });

  return (
    <nav className={navClass}>
      <ul>
        <li className={styles.item}>
          <NavLink to="/streams/current" activeClassName={styles.selected} className={streamsItemClass}>
            <span className={styles.icon}><AiOutlineRocket size={ICON_SIZE_NAVBAR} /></span>
            <span className={textElementClass}>
              Internship Streams
            </span>
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/interns" activeClassName={styles.selected}>
            <span className={styles.icon}><AiOutlineUser size={ICON_SIZE_NAVBAR} /></span>
            <span className={textElementClass}>
              Interns
            </span>
          </NavLink>
        </li>
      </ul>
      <div className={styles.change}>
        <AiOutlineMenuFold
          onClick={() => dispatch(updateNavbarView(!options.navbarIsOpen))}
          className={!options.navbarIsOpen && styles.hideIcon}
          size={16}
        />
        <AiOutlineMenuUnfold
          className={options.navbarIsOpen && styles.hideIcon}
          onClick={() => dispatch(updateNavbarView(!options.navbarIsOpen))}
          size={16}
        />
      </div>
    </nav>
  );
};

export default Navbar;
