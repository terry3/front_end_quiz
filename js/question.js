"use strict";

var QuestionNum = React.createClass({
  displayName: "QuestionNum",

  render: function render() {
    return React.createElement(
      "h1",
      null,
      "问题",
      this.props.questionNum,
      "/",
      this.props.questionNumAll
    );
  }
});

var QuestionLabel = React.createClass({
  displayName: "QuestionLabel",

  render: function render() {
    return React.createElement(
      "h2",
      null,
      this.props.questionType,
      ":"
    );
  }
});

var QuestionCode = React.createClass({
  displayName: "QuestionCode",

  render: function render() {
    return React.createElement(
      "div",
      null,
      this.props.questionCode,
      ":"
    );
  }
});

var QuestionDesc = React.createClass({
  displayName: "QuestionDesc",

  render: function render() {
    return React.createElement(
      "div",
      null,
      this.props.questionDesc
    );
  }
});

var QuestionChoiceBtn = React.createClass({
  displayName: "QuestionChoiceBtn",

  render: function render() {
    return React.createElement(
      "button",
      { value: this.props.value },
      this.props.content
    );
  }
});

var QuestionChoice = React.createClass({
  displayName: "QuestionChoice",

  render: function render() {
    var buttons = [];
    this.props.questionChoice.forEach(function (item) {
      buttons.push(React.createElement(QuestionChoiceBtn, { key: item.value, value: item.value,
        content: item.content }));
    });
    buttons.push(React.createElement(QuestionChoiceBtn, { key: "skip", value: "skip", content: "跳过" }));
    return React.createElement(
      "div",
      null,
      buttons
    );
  }
});

var QuestionView = React.createClass({
  displayName: "QuestionView",

  getInitialState: function getInitialState() {
    return {
      currentQuestionNum: 1
    };
  },

  render: function render() {
    var viewType = this.props.showState.split(' ')[0];
    if (viewType !== 'question') {
      return null;
    }
    var questionType = this.props.showState.split(' ')[1];
    return React.createElement(
      "div",
      null,
      React.createElement(QuestionNum, { questionNum: this.state.currentQuestionNum,
        questionNumAll: "20" }),
      React.createElement(QuestionLabel, { questionType: questionType }),
      React.createElement(QuestionCode, { questionCode: this.props.questions.questionCode }),
      React.createElement(QuestionDesc, { questionDesc: this.props.questions.questionDesc }),
      React.createElement(QuestionChoice, { questionChoice: this.props.questions.questionChoice })
    );
  }
});
