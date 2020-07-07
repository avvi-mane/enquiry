import {GET_ENQUIRES, SET_ENQUIRES, API} from '../actions/actionTypes';
const baseURL = 'http://www.mocky.io';

export const getEnquires = () => {
  return apiAction({
    url: `${baseURL}/v2/5c41920e0f0000543fe7b889`,
    onSuccess: setEnquires,
    onFailure: (err) => console.log('Error occured loading articles', err),
    label: GET_ENQUIRES,
  });
};

function setEnquires(data) {
  return {
    type: SET_ENQUIRES,
    payload: data,
  };
}

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
