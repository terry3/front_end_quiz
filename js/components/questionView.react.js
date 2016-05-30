var React = require('react');
var FeqActions = require('../actions/FeqActions');

var QuestionView = React.createClass({
  _onClick: function(evt) {
    console.log(evt.target.value);
    FeqActions.nextQuesion();
  },

  render: function() {
    var viewType = this.props.showState.split(' ')[0];
    var self = this;
    var code = '';
    var totalNumbers = 20;
    if (viewType !== 'question') {
      return null;
    }

    var choiceButtons = [];
    this.props.questions[this.props.questionNum].questionChoice.forEach(function(item) {
      choiceButtons.push(<button onClick={self._onClick}
                         key={item.value}
                         value={item.value}>
                         {item.content}</button>);
    });

    choiceButtons.push(<button onClick={this._onClick}
                       key="skip" value="skip">跳过</button>);
    if (this.props.questions[this.props.questionNum].questionConfig
        === 'hascode') {
      code = (<div>{this.props.questions[this.props.questionNum].questionCode}:</div>);
    }

    var questionType = this.props.showState.split(' ')[1];
    return (<div>
            <h1>问题{this.props.questionNum + 1}/{totalNumbers}</h1>
            <h2>{questionType}:</h2>
            <div>{code}</div>
            <div>{this.props.questions[this.props.questionNum].questionDesc}</div>
            <div>{choiceButtons}</div>
            </div>);
  }
});

module.exports = QuestionView;
