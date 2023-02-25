import React, { useContext } from "react";
import placeholder from "../images/placeholder.png";
import AuthContext from "../context/AuthContext";

const EventBlock = ({ permission, id, name,event_type,description,time,speaker, public_url, private_url, related_events  }) => {
  const {authenticated} = useContext(AuthContext);
  const handleScroll = (location) => {
    const destination = document.getElementById(location);
    destination.scrollIntoView({ behavior: 'smooth'});
  }
  let related_buttons = related_events.map((value) => {
    return <p onClick={() => handleScroll(value)} style={{display: "inline", cursor: "pointer"}}><u>{value}</u></p>
  })
  if (permission === "public" || authenticated) {
    return(
      <li>
        <div className="event-block" id={id}>
          <div className="img-trim">
            <img src={placeholder} alt="2022 Hack the North participants and a Hacking Space floor sign (The developer chose this photo because it's the result of him accidentally sticking the wall signs on the floor.)"></img>
          </div>
          <div className="event-info">
            <h2>{name}</h2>
            <p>Event Type: {event_type}</p>
            <p>When: {time}</p>
            <p>{description}</p>
            <p>Speaker: {speaker}</p>
            <a href={public_url} target="_blank">
              <u>Check it Out</u>
            </a>
            <p>Related Events: {related_buttons.map((divElement, index) => index === 0 ? [divElement] : [", ", divElement])}</p>
          </div> 
        </div>
      </li>
  )}else {
    return(
      <div className="empty-block"></div>
    )
  }
};

export default EventBlock;
