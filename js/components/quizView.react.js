import React from 'react';
import WelcomeView from './welcomeView.react';
import SectionView from './sectionView.react';
import QuestionView from './questionView.react';
import FinalView from './finalView.react';
import QUESTIONS from '../data';
import { FeqStore } from '../stores/FeqStore';

export default class QuizView extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getFeqState();
  }

  getFeqState() {
    return {
      showState: FeqStore.getShowState(),
      question: {
        questionNum: FeqStore.getQuestionNum(),
        currentTypeNum: FeqStore.getQuestionCurrentTypeNum(),
        questionType: FeqStore.getQuestionType(),
        questionSize: FeqStore.getQuestionSize(FeqStore.getQuestionType())
      }
    };
  }

  componentDidMount() {
    FeqStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    FeqStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(this.getFeqState());
  }

  render() {
    return (<div id="quizView">
            <WelcomeView showState={this.state.showState}
            clickStartBtn={this.clickStartBtn}/>
            <SectionView showState={this.state.showState}
            readyBtnClick={this.clickStartBtn}
            totalViewNum={FeqStore.getTotalSectionViewNum()} />
            <QuestionView questions={QUESTIONS}
            showState={this.state.showState}
            questionState={this.state.question}/>
            <FinalView showState={this.state.showState} />
            </div>);
  }
}
