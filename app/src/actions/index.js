import axios from 'axios';

export const FETCHING_ARTICLES = 'FETCHING_ARTICLES';
export const FETCHED_ARTICLES = 'FETCHED_ARTICLES';
export const FETCH_FAILED = 'FETCH_FAILED';

export const getArticles = () => {
  return dispatch => {
    dispatch({type:FETCHING_ARTICLES})
    axios
      .get('https://spaceflightnewsapi.net/api/v2/articles')
      .then(res => {
        console.log(res);
        dispatch({ type:FETCHED_ARTICLES, payload:res.data })
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: FETCH_FAILED, payload:err})
      })
  }
  // console.log("in getArticles");
  // return {type:GET_ARTICLES, payload:['1','2','3']}
};