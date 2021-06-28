import React from 'react';
import styles from './StreamsList.module.css';

const ListRow = () => (
  <>
    <div className={styles.row}>
      <div>Frontend Dev. stream 03</div>
      <div>22 Jun 2021</div>
      <div>31 days</div>
      <div>20</div>
      <div>Igor Bariev</div>
      <div>Mark Ovchinnikov</div>
      <div>Oncomming</div>
    </div>
    <div className={styles.row}>
      <div>C++ Dev. stream 08</div>
      <div>01 Jun 2021</div>
      <div>15 days</div>
      <div>18</div>
      <div>Anastasia Marchenko</div>
      <div>Maxim Osipenko</div>
      <div>Active</div>
    </div>
  </>
);

export default ListRow;
