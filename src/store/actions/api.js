// @flow

import {API_START, API_END, API_ERROR} from '../actions/actionTypes';

type Api = {
  type: string,
  payload: string,
};

type ApiError = {
  type: string,
  error: string,
};

export const apiStart: (string) => Api = (label) => ({
  type: API_START,
  payload: label,
});

export const apiEnd: (string) => Api = (label) => ({
  type: API_END,
  payload: label,
});

export const apiError: (string) => ApiError = (error) => ({
  type: API_ERROR,
  error,
});
