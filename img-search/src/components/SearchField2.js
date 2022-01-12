import React, { Fragment, useState } from "react";
import GifCard from "./GifCard";

const SearchField = () => {

    const [state, setState] = useState([]);

    const onSubmitForm = async(e) => {
        e.preventDefault()

            const request = fetch("");

        try{

            const body = {state}
        }
        catch(err){

            console.error(err.message)
        }

    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">
                Trending GIF Search
            </h1>
            <form className = "d-flex m-5" >
                <div className="input-group bg-secondary text-white">
                  <input type="text" 
                  className="form-control" 
                  placeholder="Enter search terms here to see the GIFs trending now!" 
                  aria-label="Trending field" aria-describedby="basic-addon2"
                  value = {state}
                  onChange = {e => setState(e.target.value)}></input>
                  <span className="input-group-text btn btn-outline-info btn-lg" id="basic-addon2">SEARCH</span>
                </div>
            </form>
        <GifCard />

        </Fragment>
    )
}

export default SearchField;

//     state = {
//         searchValue: "",
//         gifs: []
//         };

//     handleOnChange = event => {
//         this.setState({ searchValue: event.target.value });
//         };
    
//     handleSearch = () => {

//         this.makeApiCall(this.state.searchValue);
//     };

//     makeApiCall = searchInput => {
//         var searchUrl = ("http://api.giphy.com/v1/gifs/search?q=" + searchValue +"E&api_key=" + API_KEY);
//         fetch(searchUrl)
//         .then(response => {
        
//             return 
//                 response.json();
//         })
//         .then(jsonData => {
//         this.setState({ gifs: jsonData.gifs });
//         console.log(jsonData.gifs);
//         });
//         };
        
//     render() {
//         return (
//             <div>
//             <h1>GIPHY Search</h1>
//             <input className="text" type="text" placeholder="Search GIFs" />
//             <button onClick={this.handleSearch} className="input-group-text btn btn-outline-info btn-sm">Search</button>
            
//             {this.state.gifs ? (
//             <div>
//                  {this.state.gifs.map((gifs, index) => (
//             <div key={index}>
//                  <h1>{gifs.str}</h1>
//                  <img src={gifs.strThumb} />
//             </div>
//             ))}
//             </div>
//             ) : (
//                  <p>Try searching for a GIF!</p>
//             )}
//             </div>
//             );
//     };
// }
// <GifCard />