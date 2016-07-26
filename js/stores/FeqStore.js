import { AppDispatcher } from '../dispatcher/AppDispatcher';
import Event from 'events';
import { FeqConstants } from '../constants/FeqConstants';
import assign from 'object-assign';
import { FeqActions } from '../actions/FeqActions';
import QUESTIONS from '../data.js';

// states
var _showState = 'welcome';
var _number = 0;
var _currentTypeNumber = 0;
var _section = 'css';
var _sectionArr = [];
var _scores = 0;

(function(){
  QUESTIONS.forEach(function(item) {
    var tmpIndex = -1;
    for (var i = 0; i < _sectionArr.length; i++) {
      if (item.questionType === _sectionArr[i].type) {
        tmpIndex = i;
        break;
      }
    }
    if (tmpIndex === -1) {
      _sectionArr.push({
        type: item.questionType,
        number: 1
      });
    } else {
      _sectionArr[tmpIndex].number++;
    }
  });
})();

function findNextQuestion(currentIndex) {
  var type = _section;
  var i = currentIndex + 1;
  if (type !== QUESTIONS[currentIndex].questionType) {
    // from the begin to find the right question type.
    i = 0;
  }
  for (; i < QUESTIONS.length; i++) {
    if (QUESTIONS[i].questionType === type) {
      return i;
    }
  }
  return null;
}

function nextSection() {
  var tmp = null;
  for (var i = 0; i < _sectionArr.length; i++) {
    if (_section === _sectionArr[i].type) {
      tmp = i;
    }
  }

  if (tmp === null) {
    return null;
  }

  if (tmp === _sectionArr.length - 1) {
    // TODO: finish the quiz.
    return null;
  }
  return _sectionArr[tmp + 1].type;
}

class FeqStoreClass extends Event.EventEmitter {
  getShowState() {
    return _showState;
  }

  getQuestionNum() {
    return _number;
  }

  getQuestionTypeSize() {
    for (var i = 0; i < _sectionArr.length; i++) {
      if (_sectionArr[i].type === _section) {
        return _sectionArr[i].number;
      }
    }
    return 0;
  }

  getQuestionCurrentTypeNum() {
    return _currentTypeNumber;
  }

  getQuestionType() {
    return QUESTIONS[_number].questionType;
  }

  getQuestionSize(type) {
    var number = 0;
    QUESTIONS.forEach(function(item) {
      if (item.questionType === QUESTIONS[_number].questionType) {
        number++;
      }
    });
    return number;
  }

  getSection() {
    return _section;
  }

  getCurrentSectionNum() {
    var tmp = 0;
    for (var i = 0; i < _sectionArr.length; i++) {
      if (_section === _sectionArr[i].type) {
        tmp = i;
        break;
      }
    }
    return tmp + 1;
  }

  getTotalSectionViewNum() {
    return _sectionArr.length;
  }

  getQuestionScores() {
    return _scores;
  }

  emitChange() {
    this.emit('refresh');
  }

  addChangeListener(callback) {
    this.on('refresh', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('refresh', callback);
  }
}

AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case FeqConstants.FEQ_NEXT_QUESTION:
      if (action.currentResult === 'true') {
        _scores += 5;
      }
      var result = findNextQuestion(_number);
      if (result !== null) {
        _number = result;
        _currentTypeNumber++;
      } else {
        _section = nextSection();
        if (null === _section) {
          // no any more questions.
          _showState = 'final';
          break;
        }
        _showState = 'section';
        _number = findNextQuestion(_number);
        _currentTypeNumber = 0;
      }
      break;
    case FeqConstants.FEQ_SHOW_STATE:
      _showState = action.show;
      break;
    case FeqConstants.FEQ_NEXT_SECTION:
      _section = nextSection();
      break;
    default:
  }
  FeqStore.emitChange();
});

export const FeqStore = new FeqStoreClass();
