import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Increp from "../pages/increp";
import Haz from "../pages/hazards";
import Height from "../pages/height";
import Burn from "../pages/burn";
import MaterialExposure from "../pages/materialexposure";
import Electric from "../pages/electric";
import Scaffolding from "../pages/scaffolding";
import Noise from "../pages/noise";
import Lift from "../pages/lift";
import Rights from "../pages/rights";
import Mental from "../pages/mental";
import Tools from "../pages/tools";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/report-incident" component={Increp}/>
      <Route path="/hazards" component={Haz}/>
      <Route path="/height" component={Height}/>
      <Route path="/burn" component={Burn}/>
      <Route path="/materialexposure" component={MaterialExposure}/>
      <Route path="/electric" component={Electric}/>
      <Route path="/scaffolding" component={Scaffolding}/>
      <Route path="/noise" component={Noise}/>
      <Route path="/lift" component={Lift}/>
      <Route path="/rights" component={Rights}/>
      <Route path="/mental" component={Mental}/>
      <Route path="/tools" component={Tools}/>
    </Switch>
);
