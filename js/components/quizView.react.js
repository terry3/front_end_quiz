var React = require('react');
var WelcomeView = require('./welcomeView.react');
var SectionView = require('./sectionView.react');
var QuestionView = require('./questionView.react');
var QUESTIONS = require('../data');
var FeqStore = require('../stores/FeqStore');

function getFeqState() {
  console.log(FeqStore.getShowState());
  console.log(FeqStore.getQuestionNum());
  return {
    showState: FeqStore.getShowState(),
    question: {
      questionNum: FeqStore.getQuestionNum(),
      questionType: FeqStore.getQuestionType(),
      questionSize: FeqStore.getQuestionSize(this.questionType)
    }
  };
}

var QuizView = React.createClass({
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
    return (<div>
            <WelcomeView showState={this.state.showState}
            clickStartBtn={this.clickStartBtn}/>
            <SectionView showState={this.state.showState}
            readyBtnClick={this.clickStartBtn}
            totalViewNum={FeqStore.getTotalSectionViewNum()}/>
            <QuestionView questions={QUESTIONS}
            showState={this.state.showState}
            questionState={this.state.question}/>
            </div>);
  }
});

module.exports = QuizView;
