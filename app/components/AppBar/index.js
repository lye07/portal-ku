/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';


import styles from './styles.css';

function AppBar({ toggleDrawer }) {
  return (
    <div className={styles.appBar}>
      <div className={styles.heading}>this is app bar</div>
      <div className={styles.linkContainer}>Log In</div>
      <div
        className={styles.iconButton}
        onClick={toggleDrawer}
      >
        <FontAwesome
          className={styles.icon}
          name="bars"
        />
      </div>
    </div>
  );
}

AppBar.prototypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
