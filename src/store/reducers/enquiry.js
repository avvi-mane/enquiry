import {
  GET_ENQUIRES,
  SET_ENQUIRES,
  API_START,
  API_END,
  GET_BY_ID,
} from '../actions/actionTypes';

export default (state = {dataList: []}, action) => {
  switch (action.type) {
    case SET_ENQUIRES:
      const {dataList} = action.payload;
      return {...state, isLoading: false, dataList};
    case API_START:
      if (action.payload === GET_ENQUIRES) {
        return {
          ...state,
          isLoading: true,
        };
      }
      break;
    case API_END:
      if (action.payload === GET_ENQUIRES) {
        return {
          ...state,
          isLoading: false,
        };
      }
      break;
    case GET_BY_ID:
      return {...state, item: state.dataList.find(({enqId}) => enqId)};
    default:
      return state;
  }
};
