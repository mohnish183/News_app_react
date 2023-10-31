import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "World Cup: South Africa v Sri Lanka - clips, radio & text",
      description:
        "Follow live text, in-play video clips and radio commentary as South Africa play Sri Lanka in the Men's Cricket World Cup 2023.",
      url: "http://www.bbc.co.uk/sport/live/cricket/66854285",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      publishedAt: "2023-10-07T08:22:17.924441Z",
      content:
        "Day three of the Cricket World Cup and we take a closer look at couple of the dark horses as South Africa take on Sri Lanka in New Delhi.\r\nSouth Africa come into the tournament off the back of a seri… [+367 chars]",
    },

    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera Staff",
      title:
        "‘Where’s the crowd?’: Fans deride empty stadium at Cricket World Cup opener",
      description:
        "Cricket fans slam organisers as the ICC Cricket World Cup gets underway amidst thousands of empty seats in Ahmedabad.",
      url: "http://www.aljazeera.com/sports/2023/10/5/where-is-the-crowd-fans-deride-empty-stadium-at-world-cup-opening-match",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-05T125507Z_443924324_UP1EJA50ZVTEU_RTRMADP_3_CRICKET-WORLDCUP-ENG-NZL-1696512421.jpg?resize=1920%2C1440",
      publishedAt: "2023-10-05T15:57:41Z",
      content:
        "It was billed as the most anticipated cricket event of the year, held in the sports biggest stadium globally, in a country that is known to worship the game.\r\nBut when the ICC Cricket World Cup 2023 … [+5848 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      status: "ok",
      totalResults: 5,
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // we are getting data from APIs
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47378fea92bf41f8821f57a6111df9d0&page=1&pageSize=9`;
    let data = await fetch(url); // fetch take url as parameter and return promise.

    let parsedData = await data.json(); // return data in json formate

    this.setState({ articles: parsedData.articles });
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=47378fea92bf41f8821f57a6111df9d0&page=${
      this.state.page + 1
    }&pageSize=9`;
    let data = await fetch(url); // fetch take url as parameter and return promise.

    let parsedData = await data.json(); // return data in json formate

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=47378fea92bf41f8821f57a6111df9d0&page=${
      this.state.page - 1
    }&pageSize=9`;
    let data = await fetch(url); // fetch take url as parameter and return promise.

    let parsedData = await data.json(); // return data in json formate

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">Newsmonkey -Top Headlines</h2>

          <div className="row">
            {this.state.articles.map((item, index) => {
              return (
                <div className="col-md-4" key={item.url}>
                  <NewsItem
                    title={item.title ? item.title.slice(0, 45) : ""}
                    description={
                      item.description ? item.description.slice(0, 88) : ""
                    }
                    imageUrl={item.urlToImage}
                    newsUrl={item.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next&rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
