var React = require('react');
var FeqStore = require('../stores/FeqStore');
var FeqActions = require('../actions/FeqActions');

var QuestionView = React.createClass({
  _onClick: function(evt) {
    FeqActions.nextQuesion(evt.target.value);
  },

  render: function() {
    var self = this;
    var code = '';
    var totalNumbers = FeqStore.getQuestionTypeSize();
    if (this.props.showState !== 'question') {
      return null;
    }

    var choiceButtons = [];
    this.props.questions[this.props.questionState.questionNum].questionChoice.forEach(function(item) {
      choiceButtons.push(<button onClick={self._onClick}
                         key={item.value}
                         value={item.value}>
                         {item.content}</button>);
    });

    choiceButtons.push(<button onClick={this._onClick}
                       key="skip" value="skip">跳过</button>);
    if (this.props
        .questions[this.props.questionState.questionNum]
        .questionConfig === 'hascode') {
      code = (<div>{this.props.questions[this.props.questionState.questionNum].questionCode}:</div>);
    }

    var questionType = this.props.questionState.questionType;
    return (<div>
            <h1>问题{this.props.questionState.currentTypeNum + 1}/{totalNumbers}</h1>
            <h2>{questionType}:</h2>
            <div>{code}</div>
            <div>{this.props.questions[this.props.questionState.questionNum].questionDesc}</div>
            <div>{choiceButtons}</div>
            </div>);
  }
});

module.exports = QuestionView;
