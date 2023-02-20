
import React from "react";
import styles from '../styles/Home.module.scss';

const Header = (props) => {
  const {setToggle} = props;

  return (
    <div className={styles.headerDiv}>
      <div className={styles.imageHeader}>
        <h1 className={styles.heading}>Rakesh Chintada</h1>
      </div>
      <ul className={styles.sectionHeader}>
        <li onClick={() => setToggle('About')} className={styles.sections}>About</li>
        <li onClick={() => setToggle('Experience')} className={styles.sections}>Experience</li>
        <li onClick={() => setToggle('Projects')} className={styles.sections}>Projects</li>
        <li onClick={() => setToggle('Contact')} className={styles.sections}>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
