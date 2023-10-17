import React from "react";
import ActorCard from "./ActorCard";

const ActorGrid = ({ actor }) => {
  console.log(actor);
  return (
    <div>
      {actor.map((data) => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image
              ? data.person.image.medium
              : "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          }
          gender={data.person.gender}
          birthday={data.person.birthday ?data.person.birthday:'not found'}
          country={data.person.country ? data.person.country.name : 'not found'}
          deathday={
            data.person.deathday ? `died${data.person.deathday}` : "Alive"
          }
        />
      ))}
    </div>
  );
};

export default ActorGrid;
