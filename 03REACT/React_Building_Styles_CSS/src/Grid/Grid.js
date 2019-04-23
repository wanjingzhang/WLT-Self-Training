import React from 'react';
import GridItem from './GridItem';
import styles from './Grid.css';

export default class Gird extends React.Component {
  renderFacts() {
    return this.props.facts.map(item =>
      <GridItem
        key={item.id}
        fact={item}
      />
      )
  }
  render() {
    return (
      <div className={styles.grid}>
        {this.renderFacts()}
      </div>
    );
  }
}
