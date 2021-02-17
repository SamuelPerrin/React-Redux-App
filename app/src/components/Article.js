import React from 'react';

const Article = props => {

  return(
    <div onClick={() => window.open(props.details.url, '_blank')}>
      <img src={props.details.imageUrl} />
      <h2>{props.details.title}</h2>
      <p>{props.details.summary}</p>
    </div>
  )
}

export default Article;