// @flow
import React, { Component } from 'react';
import { Progress, Responsive } from 'semantic-ui-react';

export default class GlobalDataResourcePercentage extends Component<Props> {
  render() {
    const {
      color,
      displayAvailableSetting,
      percentageAvailable,
      size,
      style
    } = this.props;

    const percentageToDisplay =
      (displayAvailableSetting ? (100 - percentageAvailable) : percentageAvailable);

    return (
      <Progress
        color={color}
        label={(
          <div className="label">
            {percentageToDisplay}%
            {' '}
            <Responsive as="span" minWidth={800} />
          </div>
        )}
        percent={percentageToDisplay}
        size={size}
        style={style}
      />
    );
  }
}