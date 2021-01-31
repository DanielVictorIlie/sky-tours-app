import React, { Component } from "react";
import { render } from "react-dom";
import Person from "./Person";
import "./../App.css";
import PeopleShow from "./people_show.jsx";
import img from "./../img.jpg";

export default class GetPeople extends Component {
  constructor() {
    super();
    this.state = {
      species: [],
    };
  }

  componentDidMount() {
    const requests = [];
    for (let i = 1; i <= 3; i++) {
      requests.push(fetch("https://swapi.dev/api/species/?page=" + i));
    }

    Promise.all(requests)
      .then((res) => Promise.all(res.map((r) => r.json())))
      .then((data) => {
        const species = [];
        data.forEach((d) => species.push(...d.results));

        this.setState({ species });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <div
        align="center"
        className="d-flex justify-content-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ul className="list-group">
          <li className="list-group-item text-center list-group-item-danger">
            <h3>Your Favorite Star Wars Species</h3>
          </li>
          <li className="list-group-item text-center list-group-item-success">
            <h4>
              {this.state.species.length ? (
                this.state.species.map((p) => <Person key={p.name} {...p} />)
              ) : (
                <h1>loading...</h1>
              )}
              <PeopleShow />
            </h4>
          </li>
        </ul>
      </div>
    );
  }
}

render(<GetPeople />, document.getElementById("root"));
