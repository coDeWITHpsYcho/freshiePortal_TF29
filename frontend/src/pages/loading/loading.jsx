import React from 'react';
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.main}>
        <p className={styles.load}>WELCOME</p>
        <div className={styles.overlay}></div>
    </div>
  )
}

export default Loading
