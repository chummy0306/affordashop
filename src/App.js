import Password from "antd/lib/input/Password";
import React, { Component } from "react";
import "./App.css";
import Login from "./components/login/Login.js";
import Home from "./components/homepage/Home";

class App extends Component {
  constructor() {
    super()
    this.state = {
      credential: [
        {
          username: "fritzie",
          password: "12345678",
        },
      ],
    };
  }

  render() {
    const {username, password} = this.state;

    if(!username && !password){
      return (
        <div className="App">
          <Login />
        </div>
      );
    }else{
      return (
        <div className="App">
          <Home />
        </div>
      );
    }
    
  }
}

export default App;
