// @flow

import React, { PureComponent, type Node } from 'react';

import styles from './BarChart.scss';

import BarChartItem from './Item';

type Item = {
  name: string,
  score: number,
  slug: string,
};

type Props = {
  items: Array<Item>,
  children: Item => Node,
};

type State = {
  maxScore: number,
};

class BarChart extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const { items } = props;

    const maxScore = items.length > 0 ? items[0].score : 1;

    this.state = {
      maxScore,
    };
  }

  calculatePercantage = (score: number): number => {
    const { maxScore } = this.state;

    return (score * 100) / maxScore;
  };

  render() {
    const { items, children } = this.props;

    return (
      <div className={styles.barChart}>
        {items.map((item, index) => (
          <BarChartItem
            key={item.slug}
            rank={index + 1}
            percentage={this.calculatePercantage(item.score)}
          >
            {children(item)}
          </BarChartItem>
        ))}
      </div>
    );
  }
}

export default BarChart;
