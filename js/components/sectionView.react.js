var React = require('react');

var SectionView = React.createClass({
  getInitialState: function() {
    return {
      currentViewNum: 1,
      totalViewNum: 3,
      viewType: 'css'
    };
  },

  _onClick: function() {
    this.props.readyBtnClick('question css');
  },

  render: function() {
    if (this.props.showState !== 'section') {
      return null;
    }
    return (<div>
            <h1>第{this.state.currentViewNum}/{this.state.totalViewNum}战</h1>
            <h2>{this.state.viewType}</h2>
            <button onClick={this._onClick}>我准备好了</button>
           </div>);
  }
});

module.exports = SectionView;
