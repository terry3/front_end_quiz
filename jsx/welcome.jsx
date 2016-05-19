var Title = React.createClass({
  render: function() {
    return (<h1>{this.props.content}</h1>);
  }
});

var ContactMe = React.createClass({
  render: function() {
    return (<div>{this.props.content}</div>);
  }
});

var StartBtn = React.createClass({
  handleClick: function() {
    alert(this.props.prompt);
  },

  render: function() {
    return (<button onClick={this.handleClick}>{this.props.content}</button>);
  }
});

var WelcomeView = React.createClass({
  render: function() {
    return (<div>
            <Title content="前端开发知识竞赛" />
            <StartBtn content="开始" prompt="成功了" />
            <ContactMe content="github.com/terry3" />
            </div>);
  }
});

ReactDOM.render(
  <WelcomeView />,
  document.getElementById('container')
);
