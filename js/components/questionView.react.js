import React from 'react';
import { FeqStore } from '../stores/FeqStore';
import { FeqActions } from '../actions/FeqActions';

export default class QuestionView extends React.Component {
  _onClick(evt) {
    FeqActions.nextQuesion(evt.target.value);
  }

  componentDidUpdate() {
    // hilight code in html.
    Prism.highlightAll();
  }

  render() {
    var self = this;
    var code = '';
    var totalNumbers = FeqStore.getQuestionTypeSize();
    if (this.props.showState !== 'question') {
      return null;
    }

    var questionType = this.props.questionState.questionType;
    var choiceButtons = [];
    this.props.questions[this.props.questionState.questionNum].questionChoice.forEach(function(item) {
      choiceButtons.push(<button className="btn" onClick={self._onClick}
                         key={item.value}
                         value={item.value}>
                         {item.content}</button>);
    });

    choiceButtons.push(<button className="btn btn-skip" onClick={this._onClick}
                       key="skip" value="skip">跳过</button>);
    if (this.props
        .questions[this.props.questionState.questionNum]
        .questionConfig === 'hascode') {
      var formatCode = '';
      var classType = '';
      var originCode = this.props.
            questions[this.props.questionState.questionNum].questionCode;

      if (questionType === 'css') {
        classType = 'language-css';
      } else if (questionType === 'javascript') {
        classType = 'language-javascript';
      }
      code = (<div id="code"><pre><code className={classType}>
              {originCode}</code></pre></div>);
    }
    return (<div>
            <h1>问题{this.props.questionState.currentTypeNum + 1}/{totalNumbers}</h1>
            <h2>{questionType}:</h2>
            {code}
            <div>{this.props.questions[this.props.questionState.questionNum].questionDesc}</div>
            <div>{choiceButtons}</div>
            </div>);
  }
};
