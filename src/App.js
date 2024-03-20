
import './App.css';

import React, { Component } from 'react'
import Nav from './Components/Nav';
import Newscomponent from './Components/Newscomponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <div>
          <Router>
          <Nav />
          <Routes>
            <Route Exact path="/"  element={<Newscomponent key="general12" category="general"/>}></Route>
            <Route Exact path="/business"  element={<Newscomponent key="business22" category="business"/>}></Route>
            <Route Exact path="/etertainment"  element={<Newscomponent key="etertainment33" category="entertainment"/>}></Route>
            <Route Exact path="/health"  element={<Newscomponent key="health" category="health"/>}></Route>
            <Route Exact path="/science"  element={<Newscomponent key="science" category="science"/>}></Route>
            <Route Exact path="/sports"  element={<Newscomponent key="sports" category="sports"/>}></Route>
            <Route Exact path="/technology"  element={<Newscomponent key="technology" category="technology"/>}></Route>
          </Routes>
      </Router>
        </div>

    )
  }
}





