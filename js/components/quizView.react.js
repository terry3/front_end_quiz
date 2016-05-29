var React = require('react');
var WelcomeView = require('./welcomeView.react');
var SectionView = require('./sectionView.react');
var QuestionView = require('./questionView.react');
var QUESTIONS = require('../data');

var QuizView = React.createClass({
  getInitialState: function() {
    return {
      showState: 'welcome'
    };
  },

  clickStartBtn: function(view) {
    this.setState({
      showState: view
    });
  },

  render: function() {
    return (<div>
            <WelcomeView showState={this.state.showState}
            clickStartBtn={this.clickStartBtn}/>
            <SectionView showState={this.state.showState}
            readyBtnClick={this.clickStartBtn}/>
            <QuestionView questions={QUESTIONS}
            showState={this.state.showState}/>
            </div>);
  }
});

module.exports = QuizView;
