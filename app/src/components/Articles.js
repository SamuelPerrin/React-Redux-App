import React from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { getArticles } from '../actions';
import styled from 'styled-components';

const Articles = props => {
  const handleClick = () => {
    console.log("You clicked!")
    props.getArticles();
  }

  return(
    <>
      <Messages>
        {props.error && <Error>{props.error}test</Error>}
        {props.isFetching && <p>Loading articles...</p>}
        <button onClick={handleClick}>Get Articles</button>
      </Messages>
      <FlexContainer>
        {props.articles.map(x => <Article key={x.id} details={x} />)}
      </FlexContainer>
    </>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const Error = styled.div`
  background-color:#ffc0c0;
  color:#bb0000;
  width:80%;
  align-content:center;
  border: 1px solid #bb0000;
  border-radius: 1%;
`
const Messages = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #222222;;
`

const FlexContainer = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items:flex-start;
  background-color:#222222;
`

export default connect(mapStateToProps, { getArticles })(Articles)