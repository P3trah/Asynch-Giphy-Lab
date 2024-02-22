// src/components/GifListContainer.js
import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');

  const fetchGifs = async () => {
    const api_key = 'YOUR_API_KEY'; // Replace with your Giphy API key
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&rating=g`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const gifs = data.data.slice(0, 3); // Take only the first 3 gifs for simplicity
      setGifs(gifs);
    } catch (error) {
      console.error('Error fetching gifs:', error);
    }
  };

  useEffect(() => {
    fetchGifs(); // Include fetchGifs in the dependency array
  }, [search, fetchGifs]); // Add search and fetchGifs as dependencies

  const handleSearch = (input) => {
    setSearch(input);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
