import React, { Component, Fragment, useState } from "react";
import GifCard from "./GifCard";

class SearchField extends Component {

    state = {
        searchValue: "",
        gifs: []
        };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
        };
    
    handleSearch = () => {

        this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = searchInput => {
        var searchUrl = `http://api.giphy.com/v1/gifs/trending?api_key=vlBltm1oSgXB2gSk1qXFa39jxmt6UXAx`;
        fetch(searchUrl)
        .then(response => {
        
            return 
                response.json();
        })
        .then(jsonData => {
        this.setState({ gifs: jsonData.gifs });
        console.log(jsonData.gifs);
        });
        };

    render() {
        return (
            <div>
            <h1>GIPHY Search</h1>
            <input className="text" type="text" placeholder="Search GIFs" />
            <button onClick={this.handleSearch} className="input-group-text btn btn-outline-info btn-sm">Search</button>
            
            {this.state.gifs ? (
            <div>
                 {this.state.gifs.map((gifs, index) => (
            <div key={index}>
                 <h1>{gifs.str}</h1>
                 <img src={gifs.strThumb} />
            </div>
            ))}
            </div>
            ) : (
                 <p>Try searching for a GIF!</p>
            )}
            </div>
            );
    };
    
}

export default SearchField;