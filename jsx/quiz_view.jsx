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

ReactDOM.render(
  <QuizView />,
  document.getElementById('container')
);
