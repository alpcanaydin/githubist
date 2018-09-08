// @flow

import { PureComponent, type Node } from 'react';

type Props = {
  children: Node,
  threshold: number,
  onReach: () => void,
  stopListening?: boolean,
};

class ScrollOnBottom extends PureComponent<Props> {
  static defaultProps = {
    stopListening: false,
  };

  componentDidMount() {
    if (!window) {
      return;
    }

    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const { threshold, onReach, stopListening } = this.props;

    if (stopListening) {
      return;
    }

    if (
      (document.documentElement: any).getBoundingClientRect().bottom - threshold <=
      window.innerHeight
    ) {
      onReach();
    }
  };

  render() {
    const { children } = this.props;

    return children;
  }
}

export default ScrollOnBottom;
