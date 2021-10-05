import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div className="my-1 mx-1">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://i.gadgets360cdn.com/large/windows_11_image_microsoft_1629357765824.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
