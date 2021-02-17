import React from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { getArticles } from '../actions';

const Articles = props => {
  const handleClick = () => {
    console.log("You clicked!")
    props.getArticles();
  }

  return(
    <div>
      {props.error && <p>{props.error}</p>}
      {props.isFetching && <p>Loading articles...</p>}
      {props.articles.map(x => <Article key={x.id} details={x} />)}
      <button onClick={handleClick}>Get Articles</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    isFetching: state.isFetching,
    error: state.error,
  };
}

export default connect(mapStateToProps, { getArticles })(Articles)