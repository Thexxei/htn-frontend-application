import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { events, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={events} />}
    </div>
  );
};

export default Container;
