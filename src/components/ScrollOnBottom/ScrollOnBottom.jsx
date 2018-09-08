// @flow

import { PureComponent, type Node } from 'react';

type Props = {
  children: Node,
  threshold: number,
  onReach: () => void,
};

class ScrollOnBottom extends PureComponent<Props> {
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
    const { threshold, onReach } = this.props;

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
