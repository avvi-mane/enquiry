import axios from 'axios';
import {API} from '../actions/actionTypes';
import {apiError, apiStart, apiEnd} from '../actions/api';

const apiMiddleware = ({dispatch}) => (next) => (action) => {
  next(action);

  if (action.type !== API) {
    return;
  }

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headers,
  } = action.payload;

  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({data: res}) => {
      dispatch(onSuccess(res));
    })
    .catch((error) => {
      dispatch(apiError(error));
      dispatch(onFailure(error));
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
