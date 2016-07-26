import React from 'react';
import WelcomeView from './welcomeView.react';
import SectionView from './sectionView.react';
import QuestionView from './questionView.react';
import QUESTIONS from '../data';
import { FeqStore } from '../stores/FeqStore';


export default class FinalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getFeqState();
  }

  getFeqState() {
    return {
      showState: FeqStore.getShowState(),
      result: {
        scores: FeqStore.getQuestionScores()
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
    if (this.props.showState !== 'final') {
      return null;
    }

    return (<div>
            <h1>得分:{this.state.result.scores}</h1>
            </div>);
  }
};
