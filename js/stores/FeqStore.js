var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FeqConstants = require('../constants/FeqConstants');
var assign = require('object-assign');
var FeqActions = require('../actions/FeqActions');
var QUESTIONS = require('../data.js');

// states
var _showState = 'welcome';
var _number = 0;
var _currentTypeNumber = 0;
var _section = 'css';
var _sectionArr = [];
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
  console.log('tmp' + tmp);
  console.log('_sectionArr' + _sectionArr);
  console.log('_section' + _section);

  if (tmp === _sectionArr.length - 1) {
    // TODO: finish the quiz.
    return null;
  }
  return _sectionArr[tmp + 1].type;
}

var FeqStore = assign({}, EventEmitter.prototype, {

  getShowState: function() {
    return _showState;
  },

  getQuestionNum: function() {
    return _number;
  },

  getQuestionTypeSize: function() {
    for (var i = 0; i < _sectionArr.length; i++) {
      if (_sectionArr[i].type === _section) {
        return _sectionArr[i].number;
      }
    }
    return 0;
  },

  getQuestionCurrentTypeNum: function() {
    return _currentTypeNumber;
  },

  getQuestionType: function() {
    return QUESTIONS[_number].questionType;
  },

  getQuestionSize: function(type) {
    var number = 0;
    QUESTIONS.forEach(function(item) {
      if (item.questionType === QUESTIONS[_number].questionType) {
        number++;
      }
    });
    return number;
  },

  getSection: function() {
    return _section;
  },

  getCurrentSectionNum: function() {
    var tmp = 0;
    for (var i = 0; i < _sectionArr.length; i++) {
      if (_section === _section[i].type) {
        tmp = i;
        break;
      }
    }
    return tmp + 1;
  },

  getTotalSectionViewNum: function() {
    return _sectionArr.length;
  },

  emitChange: function() {
    this.emit('refresh');
  },

  addChangeListener: function(callback) {
    this.on('refresh', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('refresh', callback);
  }
});

AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case FeqConstants.FEQ_NEXT_QUESTION:
      var result = findNextQuestion(_number);
      console.log('result:' + result);
      if (result !== null) {
        _number = result;
        _currentTypeNumber++;
      } else {
        _showState = 'section';
        _section = nextSection();
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

module.exports = FeqStore;
