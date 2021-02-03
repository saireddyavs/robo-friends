import "./App.css";
import React, { Component } from "react";

import CardList from "../components/cardlist";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((robos) => {
        this.setState({ robots: robos });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchText: event.target.value });
    // console.log(event.target.value);
  };
  render() {
    const { robots, searchText } = this.state;

    const filterdRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchText.toLowerCase());
    });

    if (robots.length === 0) {
      return <div className="loader">Loading...</div>;
    } else {
      return (
        <div>
          <SearchBox SearchChange={this.onSearchChange} />
          <CardList robots={filterdRobots} />
        </div>
      );
    }
  }
}

export default App;
