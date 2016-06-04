var React = require('react');
var Prismjs = require('prismjs');

var QuizView = require('./components/quizView.react');

React.render(
  <QuizView />,
  document.getElementById('container')
);
