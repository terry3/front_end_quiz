var AppDispatcher = require('../dispatcher/AppDispatcher');
var FeqConstants = require('../constants/FeqConstants');

var FeqActions = {
  showState: function(show) {
    AppDispatcher.dispatch({
      actionType: FeqConstants.FEQ_SHOW_STATE,
      show: show
    });
  },

  nextQuesion: function(currentResult) {
    AppDispatcher.dispatch({
      actionType: FeqConstants.FEQ_NEXT_QUESTION,
      currentResult: currentResult
    });
  },
  nextSection: function() {
    AppDispatcher.dispatch({
      actionType: FeqConstants.FEQ_NEXT_SECTION
    });
  }

};

module.exports = FeqActions;
