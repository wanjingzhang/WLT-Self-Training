import React from 'react';

import styles from './GridItem.css';

const GridItem = (props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{props.fact.title}</h2> 
      <article className={styles.fact}>{props.fact.fact}</article>
    </div>
  )
}

export default GridItem;
