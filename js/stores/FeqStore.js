var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FeqConstants = require('../constants/FeqConstants');
var assign = require('object-assign');
var  _showState = 'welcome';
var _number = 0;



var FeqStore = assign({}, EventEmitter.prototype, {

  getShowState: function() {
    return _showState;
  },

  getQuestionNUm: function() {
    return _number;
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
      FeqStore.emitChange();
      break;
    case FeqConstants.FEQ_SHOW_STATE:
      _showState = action.show;
      FeqStore.emitChange();
      break;
    default:
  }
});

module.exports = FeqStore;
