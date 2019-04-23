import React from 'react';
import GridItem from './GridItem';
import styles from './Grid.css';

export default class Gird extends React.Component {
  updateClicked(id) {
    this.props.updateClicked(id);
  }
  renderFacts() {
    return this.props.facts.map(item =>
      <GridItem
        key={item.id}
        fact={item}
        updateClicked={this.updateClicked.bind(this)}
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
