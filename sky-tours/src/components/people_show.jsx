import React, { useState } from "react";
import "./../App.css";

function PeopleShow() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [avarage_lifespan, setAvarage_lifespan] = useState("");
  const [skin, setSkin] = useState("");
  const [eye, setEye] = useState("");
  const [classification, setClassification] = useState("");
  const [created, setCreated] = useState("");
  const [designation, setDesignation] = useState("");
  const [language, setLanguage] = useState("");
  const [hair, setHair] = useState("");

  function getUser() {
    let res = fetch("https://swapi.dev/api/species/3/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setName(data.name);
        setHair(data.hair_colors);
        setHeight(data.average_height);
        setAvarage_lifespan(data.average_lifespan);
        setSkin(data.skin_colors);
        setEye(data.eye_colors);
        setClassification(data.classification);
        setCreated(data.created);
        setDesignation(data.designation);
        setLanguage(data.language);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function displayOnClick() {
    getUser();
    var x = document.getElementById("showOnClick");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div>
      <button
        value="Send Request"
        className="btn btn-outline-secondary"
        type="button"
        id="form"
        onClick={displayOnClick}
      >
        More Info About Wookie
      </button>
      <table id="showOnClick">
        <thead>
          <tr>
            <th scope="col">
              <h3>Name of Species :{name}</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <h5>Hair Colors :{hair}</h5>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <h5>Avarage Height :{height}</h5>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <h5>Avarage Lifespan :{avarage_lifespan}</h5>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <h5>Skin Colors :{skin}</h5>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <h5>Eye Colors :{eye}</h5>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <h5>Classification :{classification}</h5>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <h5>When was Created :{created}</h5>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <h5>Designation :{designation}</h5>
            </th>
          </tr>
          <tr>
            <th scope="row">
              <h5>Language :{language}</h5>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PeopleShow;
