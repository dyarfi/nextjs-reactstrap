import STATUS_TYPES from '../statusTypes';
import ACTION_TYPES from '../actionTypes';
import DEFAULT_STATES from '../defaultStates';

const defaultState = DEFAULT_STATES.LAYOUT;

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ACTION_TYPES.LAYOUT.TOGGLE:
      return {
        ...state,
        toggle: !state.toggle
      };     

    default:
      return state;
  }
}

export default reducer;
