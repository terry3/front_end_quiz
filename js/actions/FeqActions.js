import { AppDispatcher } from '../dispatcher/AppDispatcher';
import { FeqConstants } from '../constants/FeqConstants';

class FeqActionsClass {
  constructor() {
    console.log('guotengfei');
  }

  showState(show) {
    AppDispatcher.dispatch({
      actionType: FeqConstants.FEQ_SHOW_STATE,
      show: show
    });
  }

  nextQuesion(currentResult) {
    AppDispatcher.dispatch({
      actionType: FeqConstants.FEQ_NEXT_QUESTION,
      currentResult: currentResult
    });
  }

  nextSection() {
    AppDispatcher.dispatch({
      actionType: FeqConstants.FEQ_NEXT_SECTION
    });
  }
}

export const FeqActions = new FeqActionsClass();
