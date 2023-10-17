import React, { useEffect, useReducer } from "react";
import ShowsCard from "./ShowsCard";


const ShowsGrid = ({ shows }) => {
  const starredShowReducer = (currentStarred, action) => {
    switch (action.type) {
      case "STARRED":
        return currentStarred.concat(action.showId);
      case "UNSTARRED":
        return currentStarred.filter((showId) => action.showId !== showId);
      default:
        return currentStarred;
    }
  };

  const [starredShow, dispatchStarred] = useReducer(starredShowReducer, []);


  const starredHandler = (showId) => {
    const isStarred = starredShow.includes(showId);
    if (isStarred) {
      return dispatchStarred({ type: "UNSTARRED", showId });
    } else {
      return dispatchStarred({ type: "STARRED", showId });
    }
  };

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(starredShow));
  }, [starredShow]);

  console.log(starredShow);
  return (
    <div>
      {shows.map((data) => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image
              ? data.show.image.medium
              : "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          }
          summary={data.show.summary}
          id={data.show.id}
          starredHandler={starredHandler}
          starredShow={starredShow.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
