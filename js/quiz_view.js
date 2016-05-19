'use strict';

var QuizView = React.createClass({
  displayName: 'QuizView',

  getInitialState: function getInitialState() {
    return {
      showState: 'welcome'
    };
  },

  clickStartBtn: function clickStartBtn(view) {
    this.setState({
      showState: view
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(WelcomeView, { showState: this.state.showState,
        clickStartBtn: this.clickStartBtn }),
      React.createElement(SectionView, { showState: this.state.showState })
    );
  }
});

ReactDOM.render(React.createElement(QuizView, null), document.getElementById('container'));
