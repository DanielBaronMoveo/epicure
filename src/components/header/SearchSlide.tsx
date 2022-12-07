import React from "react";
import { default as x } from "../../assets/images/x.svg";
import { default as search } from "../../assets/images/search-icon.svg";

interface SearchSlideProps {
  isSearch: boolean;
  toggleSearch: () => void;
}

const SearchSlide: React.FC<SearchSlideProps> = ({
  isSearch,
  toggleSearch,
}) => {
  return (
    <div className={`search-container ${search ? "show-serach" : ""}`}>
      <img src={x} onClick={toggleSearch} className="nav-icon" />
      <h1>Search</h1>
      <div>
        <img src={search} className="search-icon" />
        <input type="text" placeholder="Search for restaurant cuisine, chef" />
      </div>
    </div>
  );
};

export default SearchSlide;
