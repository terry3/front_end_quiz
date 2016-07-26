import React from 'react';
import { FeqActions } from '../actions/FeqActions';
import { FeqStore } from '../stores/FeqStore';

export default class SectionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getFeqSectionState();
  }

  getFeqSectionState() {
    return {
      viewType: FeqStore.getSection(),
      currentSectionNum: FeqStore.getCurrentSectionNum()
    };
  }

  componentDidMount() {
    FeqStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    FeqStore.removeChangeListener(this._onChange.bind(this));
  }

  _onClick() {
    FeqActions.showState('question');
  }

  _onChange() {
    this.setState(this.getFeqSectionState());
  }

  render() {
    if (this.props.showState !== 'section') {
      return null;
    }
    return (<div>
            <h1>第{this.state.currentSectionNum}/{this.props.totalViewNum}
            战</h1>
            <h2>{this.state.viewType}</h2>
            <button className="btn btn-ready"
                    onClick={this._onClick.bind(this)}>我准备好了</button>
           </div>);
  }
};
