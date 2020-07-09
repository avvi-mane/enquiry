import mockAxios from 'jest-mock-axios';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../../src/store/actions/enquiry';
import * as types from '../../../src/store/actions/actionTypes';
import apiMiddleware from '../../../src/store/middleware/apiMiddleWare';

const mockStore = configureMockStore([apiMiddleware]);

describe('enquiry action', () => {
  afterEach(() => {
    mockAxios.reset();
  });
  it('Should set the data to store', () => {
    const payload = 'Finish docs';
    const expectedAction = {
      type: types.SET_ENQUIRES_SUCCESS,
      payload,
    };
    expect(actions.getEnquiresSuccess(payload)).toEqual(expectedAction);
  });

  it('Should set the error to store', () => {
    const payload = 'Something went wrong';
    const expectedAction = {
      type: types.SET_ENQUIRES_FAILED,
      payload,
    };
    expect(actions.getEnquiresFailure(payload)).toEqual(expectedAction);
  });

  it('returns data when getEnquires is called', (done) => {
    const data = {dataList: [{enqId: 'someId'}]};
    const url = 'http://www.mocky.io/v2/5c41920e0f0000543fe7b889';

    const expectedActions = [
      {
        type: types.API,
        payload: {
          data: null,
          headersOverride: null,
          label: 'GET_ENQUIRES',
          method: 'GET',
          onFailure: actions.getEnquiresFailure,
          onSuccess: actions.getEnquiresSuccess,
          url,
        },
      },
      {
        payload: 'GET_ENQUIRES',
        type: 'API_START',
      },
      {
        payload: data,
        type: 'SET_ENQUIRES_SUCCESS',
      },
      {
        payload: 'GET_ENQUIRES',
        type: 'API_END',
      },
    ];
    const store = mockStore({});

    store.dispatch(actions.getEnquires());
    mockAxios.mockResponse({data});
    expect(mockAxios.request).toHaveBeenCalledWith({
      headers: undefined,
      method: 'GET',
      params: null,
      url,
    });
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});
