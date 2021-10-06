import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    console.log("news component constructor called");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("component mount");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=58a536793d5a470b87976d11fb0a230c&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    console.log("previous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=58a536793d5a470b87976d11fb0a230c&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);

    this.setState({ page: this.state.page - 1, articles: parseData.articles });
  };

  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=58a536793d5a470b87976d11fb0a230c&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      // console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            // disabled={this.state.page >= }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
