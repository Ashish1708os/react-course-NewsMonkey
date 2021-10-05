import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Notebookcheck.net",
      },
      author: "Deirdre O&#039;Donnell",
      title:
        "Realme is about to unleash the GT Neo2 on the European market - Notebookcheck.net",
      description:
        "Realme has only just debuted its second-gen Neo smartphone in its native China; now, a new leak asserts that the device is about to go international. The OEM is said to bring most of its RAM/storage configuration in all of its new colorways to Europe, althoug…",
      url: "https://www.notebookcheck.net/Realme-is-about-to-unleash-the-GT-Neo2-on-the-European-market.568939.0.html",
      urlToImage:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1632289427791.jpg",
      publishedAt: "2021-10-04T17:30:00Z",
      content:
        "Realme's Neo2 is the third and latest member of the OEM's new high-end GT series. On this occasion, the performance-focused line has produced a device with a novel triple-lens camera hump, rated to p… [+1586 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Farmers Outside Haryana Chief Minister's Home At Night, Demand Leader's Release - NDTV",
      description:
        "Hundreds of farmers have gathered outside Haryana Chief Minister Manohar Lal Khattar's home in Karnal district, demanding release of a farmer leader who was arrested on Monday while going to Uttar Pradesh.",
      url: "https://www.ndtv.com/india-news/farmers-outside-haryana-chief-ministers-home-at-night-demand-leaders-release-2563853",
      urlToImage:
        "https://c.ndtvimg.com/2021-10/nop33mh_farmers-khattar-house_625x300_04_October_21.jpg",
      publishedAt: "2021-10-04T17:20:10Z",
      content:
        "Farmers demanded release of Gurnam Singh Charuni, who was arrested in Meerut\r\nChandigarh: Hundreds of farmers have gathered outside Haryana Chief Minister Manohar Lal Khattar's home in Karnal distric… [+1913 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Weight loss story: 'I lost 14 kilos by cooking my veggies in zero oil and exercising every day' - Times of India",
      description:
        "Vijendra Singh became accustomed to poor eating schedules and depended on outside food because of the travelling job that he had. Soon enough, weight problems started to show up and got the worse of him.",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/weight-loss-story-i-lost-14-kilos-by-cooking-my-veggies-in-zero-oil-and-exercising-every-day/photostory/86756134.cms",
      urlToImage: "https://static.toiimg.com/photo/86756494.cms",
      publishedAt: "2021-10-04T16:30:00Z",
      content:
        "Vijendra Singh became accustomed to poor eating schedules and depended on outside food because of the travelling job that he had. Soon enough, weight problems started to show up and got the worse of … [+510 chars]",
    },
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "Zee Media Bureau",
      title:
        "Amid WhatsApp, Facebook, Instagram global outage, Twitterati have the last laugh! - Zee News",
      description:
        "WhatsApp, Instagram and Facebook has gone down for many users globally. Many people took to Twitter to report the unwanted incident.  Once again, the glitch has brought the world to its toes and made us realize how much we depend on technology.",
      url: "https://zeenews.india.com/viral/amid-whatsapp-facebook-instagram-global-outage-twitterati-have-the-last-laugh-2399815.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2021/10/04/976544-memes.jpg",
      publishedAt: "2021-10-04T16:23:12Z",
      content:
        "New Delhi: WhatsApp, Instagram and Facebook has gone down for many users globally. Many people took to Twitter to report the unwanted incident. \r\nOnce again, the glitch has brought the world to its t… [+1537 chars]",
    },
  ];
  constructor() {
    super();
    console.log("news component constructor called");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItems
              title="myTitle"
              description="myDesc"
              imageUrl="https://i.gadgets360cdn.com/large/windows_11_image_microsoft_1629357765824.jpg"
              newsUrl="todo" // going to do in next video
            />
          </div>
          <div className="col-md-4">
            <NewsItems
              title="myTitle"
              description="myDesc"
              imageUrl="https://i.gadgets360cdn.com/large/windows_11_image_microsoft_1629357765824.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItems
              title="myTitle"
              description="myDesc"
              imageUrl="https://i.gadgets360cdn.com/large/windows_11_image_microsoft_1629357765824.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
