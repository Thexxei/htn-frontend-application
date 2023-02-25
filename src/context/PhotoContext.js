import React, { createContext, useState } from "react";
import axios from "axios";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios
      .get(
        `https://api.hackthenorth.com/v3/events/`
      )
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <PhotoContext.Provider value={{ events, loading, runSearch, }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
