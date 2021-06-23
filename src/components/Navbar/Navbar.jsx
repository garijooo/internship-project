import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser, AiOutlineRocket } from 'react-icons/ai';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <ul>
      <li className={styles.selected}>
        <NavLink to="/">
          <AiOutlineRocket />
          Internship Streams
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <AiOutlineUser />
          Interns
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
