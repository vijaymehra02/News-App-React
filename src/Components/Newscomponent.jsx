import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newscomponent extends Component {
  render() {
    return (
      <div>
        <h1>i am news component</h1>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
        <Newsitem/>
      </div>
    )
  }
}
