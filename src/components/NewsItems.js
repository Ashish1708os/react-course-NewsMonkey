import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3 mx-1">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://previews.123rf.com/images/ahsanalvi/ahsanalvi2001/ahsanalvi200100447/138426453-monkey-logo-design-monkey-vector-icon-animal-illustration.jpg"
            }
            className="card-img-top"
            alt="newsImage"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {/* By {author} on {new Date(date).toGMTString()} */}
                By {author} on {new Date(date).toUTCString()}
                {/* ther is no difference betwen GMT and UTC time */}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
