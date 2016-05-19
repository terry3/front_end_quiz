'use strict';

var Title = React.createClass({
  displayName: 'Title',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      this.props.content
    );
  }
});

var ContactMe = React.createClass({
  displayName: 'ContactMe',

  render: function render() {
    return React.createElement(
      'div',
      null,
      this.props.content
    );
  }
});

var StartBtn = React.createClass({
  displayName: 'StartBtn',

  handleClick: function handleClick() {
    this.props.clickStartBtn('section');
  },

  render: function render() {
    return React.createElement(
      'button',
      { onClick: this.handleClick },
      this.props.content
    );
  }
});

var WelcomeView = React.createClass({
  displayName: 'WelcomeView',

  render: function render() {
    if (this.props.showState !== 'welcome') {
      return null;
    }
    return React.createElement(
      'div',
      null,
      React.createElement(Title, { content: '前端开发知识竞赛' }),
      React.createElement(StartBtn, { content: '开始', prompt: '成功了',
        clickStartBtn: this.props.clickStartBtn }),
      React.createElement(ContactMe, { content: 'github.com/terry3' })
    );
  }
});
