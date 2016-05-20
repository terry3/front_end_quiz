var SectionTitle = React.createClass({
  render: function() {
    return (<h1>第{this.props.current}/{this.props.all}战</h1>);
  }
});

var SectionLabel = React.createClass({
  render: function() {
    return (<h2>{this.props.sectionLabel}</h2>);
  }
});

var SectionReadyBtn = React.createClass({
  clickHandler: function() {
    this.props.clickHandler('question css');
  },

  render: function() {
    return (<button onClick={this.clickHandler}>{this.props.content}</button>);
  }
});

var SectionView = React.createClass({
  render: function() {
    if (this.props.showState !== 'section') {
      return null;
    }
    return (<div>
            <SectionTitle current="1" all="3" />
            <SectionLabel sectionLabel="CSS" />
            <SectionReadyBtn content="我准备好了" clickHandler={this.props.readyBtnClick} />
           </div>);
  }
});
