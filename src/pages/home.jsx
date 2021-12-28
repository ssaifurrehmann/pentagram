import React, {useState, useEffect} from 'react';
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */
  
   const [incidents, setIncidents] = useState([]);
   useEffect(() => {
     setIncidents(JSON.parse(localStorage.getItem("incidents")))
   });
  
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language
  const handleChangeHello = () => {
    
    // Choose a new Hello from our languages

    // Call the function to set the state string in our component

  };
  return (
    <>
      <h1 className="title">
      </h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <section>
      <animated.div onMouseEnter={trigger} style={style}>
        {/* THIS IS WHERE WE PUT OUR LOGO*/}
        <img
          src="https://cdn.glitch.com/697ad2e2-8fab-4481-b77e-95a29aafa8c4%2FSQUARE_LOGO_SINGLE_SPACE_NEW_FONT.png?v=1633210314814"
          className="illustration"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
        />
      </animated.div>
      </section>
      
      <div className="navigation">
        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>
          
        </animated.div>
      </div>
      <div>
        <h3>REPORTED INCIDENTS</h3>
        <ul class="list-group">
          

          {incidents && incidents.map((incident, i) =>
          (<li className="list-group-item p-3" key={i}>{`Name: ${incident.name}. Description: ${incident.description} Category: ${incident.category}`}
            <button className=" btn btn-warning"><a href={`http://maps.google.com/?ie=UTF8&hq=&ll={incident.lat},{incident.lng}&z=13`}> Location </a></button>
          </li>))}
        </ul>

      </div>
    </>
  );
}
