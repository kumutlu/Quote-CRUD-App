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
} from "../actions/types";

const initialState = {
  quotes: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
        loading: false
      };
    case ADD_QUOTE:
      return {
        ...state,
        quotes: [...state.quotes, action.payload],
        loading: false
      };
    case DELETE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter(quote => quote.id !== action.payload),
        loading: false
      };
      case UPDATE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.map(quote =>
          quote.id === action.payload.id ? action.payload : quote
        )
      };
    case SEARCH_QUOTES:
      return {
        ...state,
        quotes: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case QUOTES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
