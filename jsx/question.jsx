var QuestionNum = React.createClass({
  render: function() {
    return (<h1>问题{this.props.questionNum}/{this.props.questionNumAll}</h1>);
  }
});

var QuestionLabel = React.createClass({
  render: function() {
    return (<h2>{this.props.questionType}:</h2>);
  }
});

var QuestionCode = React.createClass({
  render: function() {
    return (<div>{this.props.questionCode}:</div>);
  }
});

var QuestionDesc = React.createClass({
  render: function() {
    return (<div>{this.props.questionDesc}</div>);
  }
});

var QuestionChoice = React.createClass({
  render: function() {
    var buttons = [];
    this.props.questionChoice.forEach(function(item) {
      buttons.push(<button value={item.value}>{item.content}</button>);
    });
    buttons.push(<button value="skip">跳过</button>);
    return (<div>{buttons}</div>);
  }
});

var QuestionView = React.createClass({
  getInitialState: function() {
    return {
      currentQuestionNum: 1
    };
  },

  render: function() {
    var viewType = this.props.showState.split(' ')[0];
    if (viewType !== 'question') {
      return null;
    }
    var questionType = this.props.showState.split(' ')[1];
    return (<div>
            <QuestionNum questionNum={this.state.currentQuestionNum}
            questionNumAll="20" />
            <QuestionLabel questionType={questionType}/>
            <QuestionCode questionCode={this.props.questions.questionCode} />
            <QuestionDesc questionDesc={this.props.questions.questionDesc} />
            <QuestionChoice questionChoice={this.props.questions.questionChoice} />
            </div>);
  }
});
