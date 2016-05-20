'use strict';

var SectionTitle = React.createClass({
  displayName: 'SectionTitle',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      '第',
      this.props.current,
      '/',
      this.props.all,
      '战'
    );
  }
});

var SectionLabel = React.createClass({
  displayName: 'SectionLabel',

  render: function render() {
    return React.createElement(
      'h2',
      null,
      this.props.sectionLabel
    );
  }
});

var SectionReadyBtn = React.createClass({
  displayName: 'SectionReadyBtn',

  clickHandler: function clickHandler() {
    this.props.clickHandler('question css');
  },

  render: function render() {
    return React.createElement(
      'button',
      { onClick: this.clickHandler },
      this.props.content
    );
  }
});

var SectionView = React.createClass({
  displayName: 'SectionView',

  render: function render() {
    if (this.props.showState !== 'section') {
      return null;
    }
    return React.createElement(
      'div',
      null,
      React.createElement(SectionTitle, { current: '1', all: '3' }),
      React.createElement(SectionLabel, { sectionLabel: 'CSS' }),
      React.createElement(SectionReadyBtn, { content: '我准备好了', clickHandler: this.props.readyBtnClick })
    );
  }
});
