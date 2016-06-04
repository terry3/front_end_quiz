var React = require('react');
var WelcomeView = require('./welcomeView.react');
var SectionView = require('./sectionView.react');
var QuestionView = require('./questionView.react');
var QUESTIONS = require('../data');
var FeqStore = require('../stores/FeqStore');

function getFeqState() {
  return {
    showState: FeqStore.getShowState(),
    result: {
      scores: FeqStore.getQuestionScores()
    }
  };
}

var FinalView = React.createClass({
  getInitialState: function() {
    return getFeqState();
  },

  componentDidMount: function() {
    FeqStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    FeqStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getFeqState());
  },

  render: function() {
    if (this.props.showState !== 'final') {
      return null;
    }

    return (<div>
            <div>Scores:{this.state.result.scores}</div>
            </div>);
  }
});

module.exports = FinalView;
