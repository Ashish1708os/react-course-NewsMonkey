import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          {/* <News setProgress={this.setProgress}
          apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general" /> */}
          <Switch>
            <Route exact key="home" path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact key="business" path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact key="entertainment" path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact key="general" path="/general">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact key="health" path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact key="science" path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact key="sports" path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact key="technology" path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
