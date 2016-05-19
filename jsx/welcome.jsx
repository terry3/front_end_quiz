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
    this.props.clickStartBtn('section');
  },

  render: function() {
    return (<button onClick={this.handleClick}>{this.props.content}</button>);
  }
});

var WelcomeView = React.createClass({
  render: function() {
    if (this.props.showState !== 'welcome') {
      return null;
    }
    return (<div>
            <Title content="前端开发知识竞赛" />
            <StartBtn content="开始" prompt="成功了"
            clickStartBtn={this.props.clickStartBtn}/>
            <ContactMe content="github.com/terry3" />
            </div>);
  }
});
