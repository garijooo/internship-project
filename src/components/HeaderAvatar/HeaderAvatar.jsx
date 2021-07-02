import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
import styles from './HeaderAvatar.module.css';

const HeaderAvatar = () => (
  <img src={avatar} alt="avatar" className={styles.avatar} />
);

export default HeaderAvatar;
