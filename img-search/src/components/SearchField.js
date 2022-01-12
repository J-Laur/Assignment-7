import React, { Fragment, Component, useState, useEffect } from "react";
import GifCard from "./GifCard";
import axios from "axios";

function SearchField() {

    const API_KEY = "vlBltm1oSgXB2gSk1qXFa39jxmt6UXAx"

    const [gif, setGifs] = useState({});

    const SearchGif = useEffect(() =>
    {
        axios.get("http://api.giphy.com/v1/gifs/search?q=" + Search +"E&api_key=" + 
        API_KEY).then((response) =>
        {
            setGifs(response.data);
            console.log(response.data);

        });},[]);

    const Search = (event) =>{

        event.preventDefault();
        const body = {gif};
        event.target.value;

    };

    class Render extends SearchField {
        render() {
            
             return(
              <div>
                <form onSubmit={Search}>
                  <input
                  type="text"
                  value={gif}
                  onChange={(event) => setGifs(event.target.value)}
                  ></input>
                  <button className="input-group-text btn btn-outline-info btn-sm">
                  SEARCH
                  </button>
                 </form>
              </div>
            );
         }
    }

    <GifCard />
}
export default SearchField;
