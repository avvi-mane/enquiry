import reducer from '../../../src/store/reducers/enquiry';
import * as types from '../../../src/store/actions/actionTypes';

describe('enquiry reducer', () => {
  const enqId = '5678';
  const data = {dataList: [{enqId}]};
  const initailState = {dataList: [], isLoading: true, errors: []};
  it('should handle default', () => {
    expect(reducer(undefined, {})).toEqual(initailState);
  });

  it('should handle API_START', () => {
    const payload = types.GET_ENQUIRES;

    expect(
      reducer(initailState, {
        type: types.API_START,
        payload,
      }),
    ).toEqual({
      ...initailState,
      isLoading: true,
    });
  });

  it('should handle SET_ENQUIRES_FAILED', () => {
    const payload = {
      message: 'Something Went Wrong',
    };
    expect(
      reducer(initailState, {
        type: types.SET_ENQUIRES_FAILED,
        payload,
      }),
    ).toEqual({
      ...initailState,
      isLoading: false,
      errors: [payload],
    });
  });

  it('should handle SET_ENQUIRES_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.SET_ENQUIRES_SUCCESS,
        payload: data,
      }),
    ).toEqual({
      ...initailState,
      isLoading: false,
      ...data,
    });
  });

  it('should handle API_END', () => {
    const payload = types.GET_ENQUIRES;
    expect(
      reducer(initailState, {
        type: types.API_END,
        payload,
      }),
    ).toEqual({
      ...initailState,
      isLoading: false,
    });
  });

  it('should handle GET_BY_ID', () => {
    expect(
      reducer(
        {...initailState, ...data},
        {
          type: types.GET_BY_ID,
          enqId,
        },
      ),
    ).toEqual({
      ...initailState,
      ...data,
      item: {enqId},
    });
  });
});
