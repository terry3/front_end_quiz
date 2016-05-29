var React = require('react');

var QuestionView = React.createClass({
  getInitialState: function() {
    return {
      currentQuestionNum: 1
    };
  },

  _onClick: function(evt) {
    console.log(evt.target.value);
  },

  render: function() {
    var viewType = this.props.showState.split(' ')[0];
    var self = this;
    var totalNumbers = 20;
    if (viewType !== 'question') {
      return null;
    }

    var choiceButtons = [];
    this.props.questions.questionChoice.forEach(function(item) {
      choiceButtons.push(<button onClick={self._onClick}
                         key={item.value}
                         value={item.value}>
                         {item.content}</button>);
    });

    choiceButtons.push(<button onClick={this._onClick}
                       key="skip" value="skip">跳过</button>);

    var questionType = this.props.showState.split(' ')[1];
    return (<div>
            <h1>问题{this.state.currentQuestionNum}/{totalNumbers}</h1>
            <h2>{questionType}:</h2>
            <div>{this.props.questions.questionCode}:</div>
            <div>{this.props.questions.questionDesc}</div>
            <div>{choiceButtons}</div>
            </div>);
  }
});

module.exports = QuestionView;
