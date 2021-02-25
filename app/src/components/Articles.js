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
        {props.isFetching && <p style={{color:"white"}}>Loading articles...</p>}
        {!props.articles.length && (!props.isFetching && <Btn onClick={handleClick}>Get the Latest Space News</Btn>)}
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

const Btn = styled.button`
  padding:1%;
  border-radius: 3%;
  font-size: 1.125rem;
  font-weight: bold;
  background-color: dodgerBlue;
  color: #222222;
  border: 2px solid #222222;

  &:hover{
    color: #eeeeee;
    border:none;
    box-shadow: 2px 2px #eeeeee;
    cursor:pointer;  
  }
`

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
  justify-content: space-evenly;
  align-items:flex-start;
  background-color:#222222;
`

export default connect(mapStateToProps, { getArticles })(Articles)