var React = require('react');
var FeqActions = require('../actions/FeqActions');

var WelcomeView = React.createClass({
  _onClick: function() {
    FeqActions.showState('section');
  },

  render: function() {
    if (this.props.showState !== 'welcome') {
      return null;
    }
    return (<div>
            <h1>前端开发知识竞赛</h1>
            <button className="btn btn-ready"
                    onClick={this._onClick}>开始</button>
            </div>);
  }
});

module.exports = WelcomeView;
