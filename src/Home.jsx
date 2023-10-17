import React, { useState } from "react";
import { searchForShows, searchForPerson } from "./Api/tvMaze";
import Form from "./components/Form";
import ShowsGrid from "./components/shows/ShowsGrid";
import ActorGrid from "./components/actors/ActorGrid";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState();

  const search = async ({ searchStr, searchOptions }) => {
    try {
      if (searchOptions === "shows") {
        const data = await searchForShows(searchStr);
        setApiData(data);
      } else {
        const data = await searchForPerson(searchStr);
        setApiData(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const renderData = () => {
    if(apiData.length===0){
      return <div>No result found</div>
    }
    if (apiData) {
      return apiData[0].show
        ? <ShowsGrid shows={apiData}/>
        :<ActorGrid actor={apiData}/>
    }
    if (error) {
      return <div>Error Occured: {error}</div>;
    }

    return apiData;
  };
  return (
    <div>
      <Form search={search} />
      <div>{renderData()}</div>
    </div>
  );
};

export default Home;
