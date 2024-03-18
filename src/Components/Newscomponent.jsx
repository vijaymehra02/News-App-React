import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';

export default class Newscomponent extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    }

  };

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-02-18&sortBy=publishedAt&apiKey=b738ae62d0cc45f6b205a5d35dcbb5ad';
    let fetchdata = await fetch(url);
    let pasrdata = await fetchdata.json();

    this.setState({
      articles : pasrdata.articles,
      loading : false,
    })
  }


  render() {
    return (
      <div>
        <div className="container my-3 text-center">
          <h1 className='my-3'>World News</h1>
          { this.state.loading &&<Loading/> }
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
