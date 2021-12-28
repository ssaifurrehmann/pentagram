import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function About() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">
        Our Story
      </h1>
       <br>
      </br>
    
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <p>
        <h3 className = "Heading">
          <strong>Welcome to Pentagram Safety Solutions!</strong>
        </h3>
        
      </p>
      
      <p>
      </p>
      <p>
        <em>Pentagram Safety Solutions</em> was established on October 2nd, 2021. It all came to life with the <strong><em>CodeRED Artemis Hackathon.</em></strong>
        The time to determine group names came and somehow, someway, we settled on <em>Pentagram.</em>
      </p>
      
      <ul>
        <li>
          Pentagram was faced with a challenge that needed us to spread awareness about safety in the workplace as well as finding ways to help decrease the time to action of safety related incidents that occur.
        </li>
        <li>
          After careful consideration, our developers decided to go ahead and planned on building a informative yet reactive website that would be able to help its users.
        </li>
        <li>
          We decided to incorporate different modules such as incident reporting, a hazard catalog, safety inspections, and feedback submissions to help create a database of any new workplace dangers that arise.
        </li>
      </ul>
     <section>
     
        {/* THIS IS WHERE WE PUT OUR LOGO*/}
        <img
          src="https://cdn.glitch.com/697ad2e2-8fab-4481-b77e-95a29aafa8c4%2FSQUARE_LOGO_SINGLE_SPACE_NEW_FONT.png?v=1633210314814"
          className="about_illustration"
        />
 
      </section>
      <br>
      </br>
      <br>
      </br>
  
      <h2>
        <strong>Creators of Project Pentagram</strong>
      </h2>
      
      <p>
        <ul>
          <li>
            Liam Amadio
          </li>
          <ul>
          </ul>
          <li>
            Saifur Rehman
          </li>
          <li>
            Michelle Nguyen
          </li>
          <li>
            Zachary Robinson
          </li>
          <li>
            Sean Paolo Banza
          </li>
        </ul>
      </p>
    </div>
 
  );
}
