import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newscomponent extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    }

  };

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-02-16&sortBy=publishedAt&apiKey=b738ae62d0cc45f6b205a5d35dcbb5ad';
    let fetchdata = await fetch(url);
    let pasrdata = await fetchdata.json();

    this.setState({
      articles : pasrdata.articles,
    })
  }


  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>i am news component</h1>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div  key={element.url} className="col-md-4">
              <Newsitem tital={element.title} discription={element.description} imgurl={element.urlToImage} newsurl={element.url} />
          </div>
          })}
          </div>
        </div>

      </div>
    )
  }
}
