var AppDispatcher = require('../dispatcher/AppDispatcher');
var FeqConstants = require('../constants/FeqConstants');

var FeqActions = {
  showState: function(show) {
    AppDispatcher.dispatch({
      actionType: FeqConstants.FEQ_SHOW_STATE,
      show: show
    });
  },

  nextQuesion: function() {
    AppDispatcher.dispatch({
      actionType: FeqConstants.FEQ_NEXT_QUESTION
    });
  }
};

module.exports = FeqActions;
