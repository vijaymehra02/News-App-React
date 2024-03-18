import React, { Component } from 'react'

export default class Newsitem extends Component {

    

  render() {

    let {tital , discription , imgurl , newsurl} = this.props;
    return (
  
        <div>
          <div className="card" >
            <img src={imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{tital}</h5>
              <p className="card-text">{discription}</p>
              <a href={newsurl} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

    )
  }
}
