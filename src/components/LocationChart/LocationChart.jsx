// @flow

import React, { PureComponent, type Node } from 'react';

import styles from './LocationChart.scss';

import LocationChartItem from './Item';

type Item = {
  name: string,
  score: number,
  slug: string,
  totalRepositories: number,
  totalDevelopers: number,
};

type Props = {
  items: Array<Item>,
  children: Item => Node,
};

type State = {
  maxScore: number,
};

class LocationChart extends PureComponent<Props, State> {
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
      <div className={styles.locationChart}>
        {items.map((item, index) => (
          <LocationChartItem
            key={item.slug}
            rank={index + 1}
            percentage={this.calculatePercantage(item.score)}
          >
            {children(item)}
          </LocationChartItem>
        ))}
      </div>
    );
  }
}

export default LocationChart;
