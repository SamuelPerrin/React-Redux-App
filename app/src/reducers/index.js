import { FETCHING_ARTICLES, FETCHED_ARTICLES, FETCH_FAILED } from '../actions';

const initialState = {
  articles: [],
  isFetching: false,
  error: '',
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case FETCHING_ARTICLES:
      return {
        ...state,
        isFetching: true,
        error:'',
      }
    case FETCHED_ARTICLES:
      return {
        ...state,
        isFetching: false,
        error:'',
        articles: action.payload,
      }
    case FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer;