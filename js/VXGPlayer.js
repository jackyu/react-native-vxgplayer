// reference article:
// https://juejin.im/entry/57e4e6558ac247005bbc3e37
// 

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  requireNativeComponent,
  View,
  UIManager,
  findNodeHandle,
} from 'react-native';

const RCT_VXG_PALYER_REF = 'RCTVXGPlayer';

class VXGPlayerView extends Component {
  constructor(props) {
    super(props);
  }

  stop() {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.refs[RCT_VXG_PALYER_REF]),
      UIManager.RCTVXGPlayer.Commands.stop,
      null
    );
  }

  render(){
    return (
      <RCTVXGPlayer
        ref={RCT_VXG_PALYER_REF}
        style={this.props.style}
        src = {this.props.src}
        {...this.props}
      />
    );
  };
}

VXGPlayerView.name = 'VXGPlayer';
VXGPlayerView.propTypes = {
  src: PropTypes.string,
  ...View.propTypes // include the default view properties
};

var RCTVXGPlayer = requireNativeComponent('RCTVXGPlayer', VXGPlayerView);
module.exports = VXGPlayerView;