import React from 'react';
import {
  AiOutlineFilter, AiOutlineMore, AiFillCaretUp, AiFillCaretDown,
} from 'react-icons/ai';
import styles from './StreamsList.module.css';

const StreamsList = () => (
  <section className={styles.list}>
    <table className={styles.table}>
      <thead>
        <tr className={styles.header}>
          <th>Stream Name</th>
          <th>
            <div className={styles.cell}>
              Start Date
              <div className={styles.updown}>
                <AiFillCaretUp />
                <AiFillCaretDown />
              </div>
            </div>
          </th>
          <th>
            <div className={styles.cell}>
              Duration
              <div className={styles.updown}>
                <AiFillCaretUp />
                <AiFillCaretDown />
              </div>
            </div>
          </th>
          <th>
            <div className={styles.cell}>
              Interns
              <div className={styles.updown}>
                <AiFillCaretUp />
                <AiFillCaretDown />
              </div>
            </div>
          </th>
          <th>
            <div className={styles.cell}>
              Mentor
              <div className={styles.filter}>
                <AiOutlineFilter />
              </div>
            </div>
          </th>
          <th>
            <div className={styles.cell}>
              Lead
              <div className={styles.filter}>
                <AiOutlineFilter />
              </div>
            </div>
          </th>
          <th>
            <div className={styles.cell}>
              Status
              <div className={styles.filter}>
                <AiOutlineFilter />
              </div>
            </div>
          </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.row}>
          <td className={styles.name}>Frontend Dev. stream 03</td>
          <td>22 Jun 2021</td>
          <td>31 days</td>
          <td>20</td>
          <td>Igor Bariev</td>
          <td>Mark Ovchinnikov</td>
          <td><span className={styles.oncoming}>Oncoming</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>C++ Dev. stream 08</td>
          <td>01 Jun 2021</td>
          <td>15 days</td>
          <td>18</td>
          <td>Anastasia Marchenko</td>
          <td>Maxim Osipenko</td>
          <td><span className={styles.active}>Active</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>QA stream 02</td>
          <td>31 May 2021</td>
          <td>31 days</td>
          <td>24</td>
          <td>Maxim Osipenko</td>
          <td>Anatoly Simonov</td>
          <td><span className={styles.paused}>Paused</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>C++ Dev. stream 08</td>
          <td>01 Jun 2021</td>
          <td>15 days</td>
          <td>18</td>
          <td>Anastasia Marchenko</td>
          <td>Maxim Osipenko</td>
          <td><span className={styles.active}>Active</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>C++ Dev. stream 08</td>
          <td>01 Jun 2021</td>
          <td>15 days</td>
          <td>18</td>
          <td>Anastasia Marchenko</td>
          <td>Maxim Osipenko</td>
          <td><span className={styles.active}>Active</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>Frontend Dev. stream 03</td>
          <td>22 Jun 2021</td>
          <td>31 days</td>
          <td>20</td>
          <td>Igor Bariev</td>
          <td>Mark Ovchinnikov</td>
          <td><span className={styles.oncoming}>Oncoming</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>C++ Dev. stream 08</td>
          <td>01 Jun 2021</td>
          <td>15 days</td>
          <td>18</td>
          <td>Anastasia Marchenko</td>
          <td>Maxim Osipenko</td>
          <td><span className={styles.active}>Active</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>QA stream 02</td>
          <td>31 May 2021</td>
          <td>31 days</td>
          <td>24</td>
          <td>Maxim Osipenko</td>
          <td>Anatoly Simonov</td>
          <td><span className={styles.paused}>Paused</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>QA stream 02</td>
          <td>31 May 2021</td>
          <td>31 days</td>
          <td>24</td>
          <td>Maxim Osipenko</td>
          <td>Anatoly Simonov</td>
          <td><span className={styles.paused}>Paused</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
        <tr className={styles.row}>
          <td className={styles.name}>C++ Dev. stream 08</td>
          <td>01 Jun 2021</td>
          <td>15 days</td>
          <td>18</td>
          <td>Anastasia Marchenko</td>
          <td>Maxim Osipenko</td>
          <td><span className={styles.active}>Active</span></td>
          <td><div className={styles.more}><AiOutlineMore /></div></td>
        </tr>
      </tbody>
    </table>
  </section>
);
// StreamsList.propTypes = {
//   children: PropTypes.node,
// };

// StreamsList.defaultProps = {
//   children: PropTypes.node,
// };

export default StreamsList;
