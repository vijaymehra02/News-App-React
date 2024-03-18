
import './App.css';

import React, { Component } from 'react'
import Nav from './Components/Nav';
import Newscomponent from './Components/Newscomponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Newscomponent/>
      </div>
    )
  }
}


