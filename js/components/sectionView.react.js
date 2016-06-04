var React = require('react');
var FeqActions = require('../actions/FeqActions');
var FeqStore = require('../stores/FeqStore');

function getFeqSectionState() {
  return {
    viewType: FeqStore.getSection(),
    currentSectionNum: FeqStore.getCurrentSectionNum()
  };
}

var SectionView = React.createClass({
  getInitialState: function() {
    return getFeqSectionState();
  },

  componentDidMount: function() {
    FeqStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    FeqStore.removeChangeListener(this._onChange);
  },

  _onClick: function() {
    FeqActions.showState('question');
  },

  _onChange: function() {
    this.setState(getFeqSectionState());
  },

  render: function() {
    if (this.props.showState !== 'section') {
      return null;
    }
    return (<div>
            <h1>第{this.state.currentSectionNum}/{this.props.totalViewNum}
            战</h1>
            <h2>{this.state.viewType}</h2>
            <button className="btn btn-ready"
                    onClick={this._onClick}>我准备好了</button>
           </div>);
  }
});

module.exports = SectionView;
