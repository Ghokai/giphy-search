import {
  SET_NEW_TERM_ACTION,
  FETCH_IMAGES_ACTION,
  FETCH_IMAGES_SUCCESS_ACTION,
  FETCH_IMAGES_ERROR_ACTION,
  TOGGLE_LIST_MODE_ACTION
} from "./actions";
import { Image } from "./models";

export interface AppState {
  isLoading: boolean;
  term: string;
  images: Image[];
  errorMessage: string;
  singleColumnList: boolean;
}

export const getInitialState = (): AppState => ({
  isLoading: false,
  term: "",
  images: [],
  errorMessage: "",
  singleColumnList: true
});

export interface Action {
  type: string;
  payload: any;
}

const initialReducerState = getInitialState();

export const reducer = (
  state: AppState = initialReducerState,
  action: Action
): AppState => {
  switch (action.type) {
    case SET_NEW_TERM_ACTION:
      return {
        ...getInitialState(),
        term: action.payload,
        singleColumnList: state.singleColumnList
      };
    case FETCH_IMAGES_ACTION:
      return { ...state, isLoading: true };
    case FETCH_IMAGES_SUCCESS_ACTION:
      return {
        ...state,
        images: [...state.images, ...action.payload],
        isLoading: false
      };
    case FETCH_IMAGES_ERROR_ACTION:
      return { ...state, errorMessage: action.payload, isLoading: false };
    case TOGGLE_LIST_MODE_ACTION:
      return { ...state, singleColumnList: !state.singleColumnList };
    default:
      return state;
  }
};
