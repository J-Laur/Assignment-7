import React, { Fragment, useEffect, useState } from 'react';
import SearchField from "./components/SearchField";
import "./App.css";

function App() {
    return (
      <main className="container">
        <SearchField />
      </main>
    );
  }

  async function fetchGifs() {
    try {
      const API_KEY = "vlBltm1oSgXB2gSk1qXFa39jxmt6UXAx";
      const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  
  }

export default App;

