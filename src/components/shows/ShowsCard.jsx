import React from 'react'

const ShowsCard = ({name,image,summary,id,starredHandler,starredShow}) => {
  return (
    <div>
        <div>
            <img src={image} alt="name" />
        </div>
        <h1>{name}</h1>
        <p>{summary?.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,'')}</p>
        <a href={`/show/${id}`} target='_blank' rel="noreferrer">Read more...</a>
        <button onClick={()=>starredHandler(id)}>{starredShow?'Unstar':'Star'}</button>
    </div>
  )
}

export default ShowsCard