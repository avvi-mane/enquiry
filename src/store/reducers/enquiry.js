import {
  SET_ENQUIRES_FAILED,
  API_START,
  API_END,
  GET_BY_ID,
  GET_ENQUIRES,
  SET_ENQUIRES_SUCCESS,
} from '../actions/actionTypes';

export default (
  state = {dataList: [], isLoading: true, errors: []},
  action,
) => {
  switch (action.type) {
    case SET_ENQUIRES_SUCCESS:
      const {dataList} = action.payload;
      return {
        ...state,
        isLoading: false,
        dataList,
        errors: [],
      };
    case SET_ENQUIRES_FAILED:
      const {message} = action.payload;
      return {
        ...state,
        isLoading: false,
        errors: [{message}],
        dataList: [],
      };
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
      return {
        ...state,
        item: state.dataList.find(({enqId}) => action.enqId === enqId),
      };
    default:
      return state;
  }
};
