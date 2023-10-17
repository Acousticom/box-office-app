import React from 'react'

const ActorCard = ({name,image,gender,birthday,country,deathday}) => {
  return (
    <div>
        <div>
            <img src={image} alt="" />
        </div>
        <h1>{`${name} (${gender})`}</h1>
        <p>Country:- {country}</p>
        <p>Birthday:- {birthday}</p>
        <p>Deathday:- {deathday}</p>
    </div>
  )
}

export default ActorCard