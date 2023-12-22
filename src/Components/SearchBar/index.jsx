import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../Context/search";
import './index.scss'
import { Link } from "react-router-dom";

function SearchBar() {
  const { search } = useContext(SearchContext);
  const [searchBar, setSearchBar] = useState([]);

  useEffect(() => {
    fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
      .then((res) => res.json())
      .then((data) => setSearchBar(data));
  }, []);

  return (
    <div className="showDiv">
      {searchBar
        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
        .map((x) => (
          <Link to={`/detail/${x.id}`}>
          <div className="searchBar_card">
            <p> {x.name}</p>
            <img src={x.image} />
          </div></Link>
        ))}
    </div>
  );
}

export default SearchBar;
