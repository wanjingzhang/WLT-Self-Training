import React from 'react';
import styles from './Rocket.css';

export default class Rocket extends React.Component {
  render() {
    return (
      <div>
        <img src="/shuttle.png" alt="shuttle" className={styles.img} />
      </div>
    );
  }
}
