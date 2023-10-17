import React from "react";
import Details from "./Details";

const ShowMainData = ({ image, name, network, premiered, rating, summary,embedded }) => {
  return (
    <div>
      <div>
        <img
          src={
            image
              ? image.original
              : "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          }
          alt=""
        />
      </div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>
          Premiered: {premiered} on {network ? network.name : "N/A"}
        </p>
        <p>Rating: {rating ? rating : "N/A"}</p>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <Details seasons={embedded.seasons} cast={embedded.cast}/>
    </div>
  );
};

export default ShowMainData;
