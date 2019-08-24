import { Dispatch } from "react";
import { Action } from "./state";
import { Image } from "./models";
import { fetchGiphyImages } from "../api/giphy";
import { GIPHY_API_PARAMETER_LIMIT_THREE_COLUMN } from "../config";

export const SET_NEW_TERM_ACTION = "SET_NEW_TERM";
export const FETCH_IMAGES_ACTION = "FETCH_IMAGE";
export const FETCH_IMAGES_SUCCESS_ACTION = "FETCH_IMAGE_SUCCESS";
export const FETCH_IMAGES_ERROR_ACTION = "FETCH_IMAGE_ERROR";
export const TOGGLE_LIST_MODE_ACTION = "TOGGLE_LIST_MODE";

export const toggleListMode = async (
  dispatch: Dispatch<Action>,
  term: string,
  offset: number,
  singleColumnList: boolean
) => {
  dispatch({ type: TOGGLE_LIST_MODE_ACTION, payload: null });

  if (
    singleColumnList &&
    term.length > 0 &&
    offset < GIPHY_API_PARAMETER_LIMIT_THREE_COLUMN
  ) {
    await setNewTerm(dispatch, term, !singleColumnList);
  }
};

export const setNewTerm = async (
  dispatch: Dispatch<Action>,
  term: string,
  SingleColumnList: boolean
) => {
  dispatch({ type: SET_NEW_TERM_ACTION, payload: term });
  await fetchImages(dispatch, term, 0, SingleColumnList);
};

export const fetchImages = async (
  dispatch: Dispatch<Action>,
  term: string,
  offset: number,
  singleColumnList: boolean
) => {
  try {
    dispatch({ type: FETCH_IMAGES_ACTION, payload: null });

    const imageList: Image[] = await fetchGiphyImages(
      term,
      singleColumnList,
      offset
    );

    if (imageList.length > 0) {
      dispatch({ type: FETCH_IMAGES_SUCCESS_ACTION, payload: imageList });
    } else {
      dispatch({
        type: FETCH_IMAGES_ERROR_ACTION,
        payload: "no giphy found to show!"
      });
    }
  } catch (error) {
    console.log(error);
    console.log(error.response);
    dispatch({ type: FETCH_IMAGES_ERROR_ACTION, payload: "Error!" });
  }
};
