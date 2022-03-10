import React, { useState, useEffect } from 'react';
import '../App.css';

const AsteroidDetails = (id) => {
  const [asteroid, setAsteroid] = useState();

  useEffect(() => {
    fetch(`/infosAsteroids/${id}`)
      .then(res => res.json())
      .then(data => {
        setAsteroid(data);
        console.log(data)
      });
  }, []);

  if (asteroid) {
    return (
      <div className="asteroidsContainer">
      </div>
    )
  }
  else {
    return <p>Loading...</p>
  }
}


export default AsteroidDetails;
