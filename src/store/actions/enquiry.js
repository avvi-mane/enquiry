// @flow

import {
  GET_ENQUIRES,
  SET_ENQUIRES_SUCCESS,
  SET_ENQUIRES_FAILED,
  API,
} from '../actions/actionTypes';
const baseURL = 'http://www.mocky.io';

export const getEnquires = () => {
  return apiAction({
    url: `${baseURL}/v2/5c41920e0f0000543fe7b889`,
    onSuccess: getEnquiresSuccess,
    onFailure: getEnquiresFailure,
    label: GET_ENQUIRES,
  });
};

type Item = {};

type ActionType = {
  type: string,
  payload: Item,
};

const getEnquiresSuccess: (Item) => ActionType = (data) => {
  return {
    type: SET_ENQUIRES_SUCCESS,
    payload: data,
  };
};

const getEnquiresFailure: (Item) => ActionType = (data) => {
  return {
    type: SET_ENQUIRES_FAILED,
    payload: data,
  };
};

const apiAction = ({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null,
}) => {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
};
export default Object.freeze(getEnquires);
