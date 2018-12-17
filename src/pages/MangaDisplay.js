import React, { Component } from "react";

import "./MangaDisplay.css";

import { genres, portraits, popIcon, latIcon, genIcon } from "../randomData";

// Components
import SearchBar from "../components/SearchBar/SearchBar";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import GenreList from "../components/GenreList/GenreList";
import PortraitList from "../components/PortraitList/PortraitList";
import MangaInfo from "../components/MangaInfo/MangaInfo";
import Footer from "../components/Footer/Footer";

class MangaDisplay extends Component {
  render() {
    return (
      <div className="manga-display-container">
        <div className="main-container">
          <div className="searchbar-container-item">
            <SearchBar />
          </div>
          <div className="popular-manga-container-item">
            <SectionContainer
              icon={popIcon}
              title={"Popular Manga"}
              bg={"rgb(140, 132, 185)"}
            >
              <PortraitList portraits={portraits} />
            </SectionContainer>
          </div>
          <div className="manga-container-item">
            <SectionContainer icon={latIcon} title={"Latest Manga"} bg={"red"}>
              <MangaInfo />
            </SectionContainer>
          </div>
          <div className="genres-manga-container-item">
            <SectionContainer icon={genIcon} title={"Genres"} bg={"#16a085"}>
              <GenreList items={genres} />
            </SectionContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MangaDisplay;
