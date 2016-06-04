var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FeqConstants = require('../constants/FeqConstants');
var assign = require('object-assign');
var QUESTIONS = require('../data.js');

// states
var _showState = 'welcome';
var _number = 0;
var _section = 'css';
var _sectionArr = [];
(function(){
  QUESTIONS.forEach(function(item) {
    if (_sectionArr.indexOf(item.questionType) === -1) {
      _sectionArr.push(item.questionType);
    }
  });
})();

var FeqStore = assign({}, EventEmitter.prototype, {

  getShowState: function() {
    return _showState;
  },

  getQuestionNum: function() {
    return _number;
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
    var tmp = _sectionArr.indexOf(_section);
    console.log('section:' + ' ' + tmp);
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
      _number += 1;
      break;
    case FeqConstants.FEQ_SHOW_STATE:
      _showState = action.show;
      break;
    case FeqConstants.FEQ_NEXT_SECTION:
      var tmp = _sectionArr.indexOf(action.section);
      if (-1 === tmp) {
        return;
      }
      if (tmp === _sectionArr.length - 1) {
        // TODO: finish the quiz.
        return;
      }
      _section = _sectionArr[_sectionArr[tmp + 1]];
      break;
    default:
  }
  FeqStore.emitChange();
});

module.exports = FeqStore;
