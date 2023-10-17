import React from "react";

const Details = ({ seasons, cast }) => {
  console.log(seasons);
  return (
    <div>
      <h2>Seasons</h2>
      <h3> Total Number of seasons- {seasons.length}</h3>
      <h3>
        Total Number of episodes-{" "}
        {seasons.reduce((acc, curr) => acc + curr.episodeOrder, 0)}
      </h3>
      {seasons.map((season) => (
        <div key={season.id}>
          <img
            src={
              season.image
                ? season.image.medium
                : "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
            alt=""
          />
          <p>Number of episodes : {season.episodeOrder}</p>
          <p>Premiered on : {season.premiereDate}</p>
        </div>
      ))}
      <h2>Cast</h2>
      {cast.map((item) => (
        <div>
          <img
            src={
              item.person.image
                ? item.person.image.medium
                : "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
            alt=""
          />
          <h3>
            {item.person.name} as {`(${item.character.name})`}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Details;
