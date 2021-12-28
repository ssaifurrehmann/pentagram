import React, { useState, useEffect } from "react";
import { useGoogleMaps } from "react-hook-google-maps";

/**
 * Incident report page is a form that allows the user
 * To fill out what incident has happened and save that information for other uses to see
 */

const Increp = () => {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  const [values, setValues] = useState({
    name: "",
    description: "",
    userCoords: { lat: 0, lng: 0 },
    error: "",
    category:"",
    loading: false,
    locationIsLoaded: false
  });

  const {
    name,
    description,
    userCoords,
    formData,
    error,
    loading,
    locationIsLoaded,
    category,
  } = values;

  useEffect(() => {
    setValues({ ...values, loading: true });
    //get user location
    if ("geolocation" in navigator) {
      console.log("location avaliable");
      navigator.geolocation.getCurrentPosition(async position => {
        await setValues({
          ...values,
          userCoords: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },

          loading: false
        });
      });
    } else {
      console.log("location not avaliable");
      setValues({ ...values, error: "Location not avaliable" });
      setValues({ ...values, loading: false });
    }
  }, []);

  //map section
  const mapStyles = {
    width: "100%",
    height: "100%"
  };
  const showMap = async () => {
    const { ref, map, google } = useGoogleMaps(
      "AIzaSyDHls65r1mKqii-NVuE0vgFwctsUhDCanY",
      {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 3
      }
    );

    return <div ref={ref} style={{ width: 400, height: 300 }} />;
  };

  const clickSubmit = () => {
    event.preventDefault();
    console.log(values);
    setValues({ ...values });
    //save to localstorage
    var existingIncidents = JSON.parse(localStorage.getItem("incidents"));
    if (existingIncidents == null) existingIncidents = [];
    existingIncidents.push({
      name: values.name,
      description: values.description,
      category: values.category,
      lat: values.userCoords.lat,
      lng: values.userCoords.lng
    });
    localStorage.setItem("incidents", JSON.stringify(existingIncidents));
  };
  const handleChange = name => event => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const showError = () => error && <div>{error}</div>;
  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading Location Data...</h2>
      </div>
    );

  return (
    <div className="page">
      {showError()}
      <h1 className="mb-2 title">Report an Incident Form</h1>
      <p>
        Please fill out exactly what happened and your location will
        automatically be tracked
      </p>
      <form className="mb-3" onSubmit={clickSubmit}>
        <div className="form-group">
          <label className="text-muted">Name of Person</label>
          <input
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            value={name}
          />
        </div>

        <div className="mt-3 form-group">
          <label className="text-muted">Category of Incident</label>
          <select
            onChange={handleChange('category')}
            className='form-control'
            value={category}
            >
            <option>Please choose an option</option>
            <option value="Height Hazard">Height Hazard</option>
            <option value="Material Exposure">Material Exposure</option>
            <option value="Scaffolding Hazards">Scaffolding Hazards</option>
            <option value="Burn Hazards">Burn Hazards</option>
            <option value="Noise Hazards">Noise Hazards</option>
            <option value="Electrical Hazards">Electrical Hazards</option>
            <option value="Lift Hazards">Lift Hazards</option>

          </select>
        </div>

        <div className="mt-3 form-group">
          <label className="text-muted">Description of Incident</label>
          <input
            onChange={handleChange("description")}
            type="text"
            className="form-control"
            value={description}
          />
        </div>

        {!loading ? (
          <div>
            <button className="mt-3 btn btn-outline-primary">Submit</button>
          </div>
        ) : (
          showLoading()
        )}
      </form>
    </div>
  );
};
export default Increp;
