import React, { Component } from "react";

import "./Home.css";

class Home extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch(
      "https://manga-cradle.com/api/v1/manga?limit=30&fields=title+portrait+chaptersList"
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ data: json });
      });
  }

  render() {
    return <div className="main-container">prfprjofrjoi</div>;
  }
}
export default Home;
