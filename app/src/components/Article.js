import React from 'react';
import styled from 'styled-components';

const Article = props => {

  return(
    <StyledCard onClick={() => window.open(props.details.url, '_blank')}>
      <div>
        <img src={props.details.imageUrl} alt={props.details.title}/>
        <Caption>
          <i>from </i> 
          {props.details.newsSite}
        </Caption>
      </div>
      <h4>{props.details.title}</h4>
      <p>{props.details.summary}</p>
    </StyledCard>
  )
}

const Caption = styled.p`
  color:gray;
  font-size: 0.75rem;
  padding:0;
  margin:0;
`

const StyledCard = styled.div`
  width: 250px;
  border: 2px solid black;
  border-radius: 2%;
  box-shadow: 4px 4px lightgray;
  margin: 1% 1%;
  padding: 2%;
  background-color: #eeeeee;

  img {
    width: 80%;
    border: 1px solid black;
    margin-top: 1%;
    box-shadow: 4px 4px #eeeeee;
    padding:0;
  }

  &:hover{
    cursor:pointer;
    background-color: #ffffff;
  }
`

export default Article;