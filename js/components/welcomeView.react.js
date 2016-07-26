import React from 'react';
import { FeqActions } from '../actions/FeqActions';

export default class WelcomeView extends React.Component {
  _onClick() {
    FeqActions.showState('section');
  }

  render() {
    if (this.props.showState !== 'welcome') {
      return null;
    }
    return (<div>
            <h1>前端开发知识竞赛</h1>
            <button className="btn btn-ready"
                    onClick={this._onClick}>开始</button>
            </div>);
  }
}
