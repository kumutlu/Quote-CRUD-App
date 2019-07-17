import {
  GET_QUOTES,
  SET_LOADING,
  QUOTES_ERROR,
  ADD_QUOTE,
  DELETE_QUOTE,
  UPDATE_QUOTE,
  SEARCH_QUOTES,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./types";

// Get QUOTES from server
export const getQuotes = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/quotes");
    const data = await res.json();

    dispatch({
      type: GET_QUOTES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: QUOTES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add new quote
export const addQuote = quote => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/quotes", {
      method: "POST",
      body: JSON.stringify(quote),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_QUOTE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: QUOTES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete quote from server
export const deleteQuote = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/quotes/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_QUOTE,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: QUOTES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update quote on server
export const updateQuote = quote => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/quotes/${quote.id}`, {
      method: "PUT",
      body: JSON.stringify(quote),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_QUOTE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: QUOTES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server quotes
export const searchQuotes = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`quotes?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_QUOTES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: QUOTES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current quote
export const setCurrent = quote => {
  return {
    type: SET_CURRENT,
    payload: quote
  };
};

// Clear current quote
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
