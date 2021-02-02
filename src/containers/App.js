import "./App.css";
import React, { Component } from "react";

import CardList from "../components/cardlist"




class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: []
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(Response => Response.json()).then(robos => {
      this.setState({ robots: robos })
    });
  }

  render() {
    const robos = this.state.robots

    if (robos.length == 0) {
      return (<div class="loader">Loading...</div>);

    }
    else {
      return (
        <div>
          <CardList robots={robos} />
        </div>);
    }


  }








}

export default App;
