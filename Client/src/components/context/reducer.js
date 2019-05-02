import { FINISH_LOADING, START_LOADING, SET_USER } from "./actionTypes";

export default (state, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case FINISH_LOADING:
      return { ...state, isLoading: false };
    case SET_USER: {
      const { id, role } = action.payload;
      return { ...state, id, role };
    }
    default:
      return state;
  }
};
