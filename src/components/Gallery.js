import React from "react";
import Noevents from "./NoEvents";
import EventBlock from "./EventBlock";


const Gallery = props => {
  
  const results = props.data;
  let events;
  let noevents;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    results.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    const event_filter = window.location.pathname.split('/').pop();
    let filtered_events = (event_filter !== "") ? results.filter(result => result.event_type === event_filter) : results;
    events = filtered_events.map(event => {
      let start_date = new Date(event.start_time); // create a new Date object with the epoch timestamp
      let end_date = new Date(event.end_time)
      let year = start_date.getFullYear(); // get the year
      let month = start_date.getMonth() + 1; // get the month (add 1 because January is 0)
      let day = start_date.getDate(); // get the day
      let start_hour = start_date.getHours();
      let start_minute = start_date.getMinutes(); // get the minutes
      if (start_minute < 10) { // if minutes is less than 10, add a leading zero
        start_minute = `0${start_minute}`;
      }
      let end_hour = end_date.getHours();
      let end_minute = end_date.getMinutes(); // get the minutes
      if (end_minute < 10) { // if minutes is less than 10, add a leading zero
        end_minute = `0${end_minute}`;
      }
      let formatted_time = `${year}-${month}-${day}, ${start_hour}:${start_minute}-${end_hour}:${end_minute}`;
      let speaker = event.speakers[0] ? event.speakers[0].name : "Smh they didn't tell us yet"
      let description = event.description
      let event_type = event.event_type.replace("_"," ")
      let name = event.name
      let permission = event.permission
      let public_url = event.public_url
      let private_url = event.private_url
      let related_events = event.related_events
      let id = event.id
      return <EventBlock permission={permission} name={name} event_type={event_type} description={description} time={formatted_time} speaker={speaker} public_url={public_url} private_url={private_url} related_events={related_events} id={id}/>;
    });
  } else {
    noevents = <Noevents />; // return 'not found' component if no events fetched
  }
  return (
    <div>
      <ul>{events}</ul>
      {noevents}
    </div>
  );
};

export default Gallery;
