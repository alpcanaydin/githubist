// @flow

import { PureComponent, type Node } from 'react';
import { withRouter, type Location } from 'react-router-dom';

type Props = {
  children: Node,
  location: Location,
};

class ScrollToTop extends PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    const { location } = this.props;

    if (window && location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

export default withRouter(ScrollToTop);
