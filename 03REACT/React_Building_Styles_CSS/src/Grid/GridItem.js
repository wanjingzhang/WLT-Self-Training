import React from 'react'; 
import styles from './GridItem.css';
import Badge from './Badge';
import Explorer from './Explorer';

const GridItem = (props) => {
  return (
    <div className={styles.card} onClick={() => props.updateClicked(props.fact.id)} >
      {props.fact.clicked ? <Explorer /> : <Badge />}
      <h2 className={styles.title}>{props.fact.title}</h2> 
      <article className={styles.fact}>{props.fact.fact}</article>
    </div>
  )
}

export default GridItem;
