import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../Api/tvMaze";
import ShowMainData from "../components/shows/ShowMainData";
import { Link } from "react-router-dom";

const useShowById = (showId) => {
  const [showData, setShowData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [showId]);
  return { showData, error };
};

const Show = () => {
  const { showId } = useParams();
  const { showData, error } = useShowById(showId);
  console.log(showData);

  if (error) {
    return <div>We have got an error : {error}</div>;
  }
  if (showData) {
    return (
      <div>
        <Link to="/">Back to home page</Link>
        <ShowMainData
          key={showData.id}
          image={showData.image}
          name={showData.name}
          network={showData.network}
          premiered={showData.premiered}
          rating={showData.rating.average}
          summary={showData.summary}
          embedded={showData._embedded}
        />
        ;
      </div>
    );
  }
  return <div>Data is loading</div>;
};

export default Show;
