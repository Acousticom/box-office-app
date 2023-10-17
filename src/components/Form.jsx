import React, { useState } from "react";

const Form = ({search}) => {
    const [searchStr, setSearchStr] = useState("");
    const [searchOptions, setSearchOptions] = useState();

    const onSubmit=(event)=>{
        event.preventDefault()
        const options={searchStr,searchOptions}
        search(options)
    }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchStr}
          onChange={(event) => setSearchStr(event.target.value)}
        />
        <label>
          Shows
          <input
            type="radio"
            name="searchByOptions"
            value="shows"
            onChange={(event) => setSearchOptions(event.target.value)}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="searchByOptions"
            value="actors"
            onChange={(event) => setSearchOptions(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
