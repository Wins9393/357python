import React, { useState, useEffect } from 'react';
import '../App.css';

const InfosAsteroids = () => {
  const [asteroids, setAsteroids] = useState();

  useEffect(() => {
    fetch('/infosAsteroids')
      .then(res => res.json())
      .then(data => {
        setAsteroids(data.near_earth_objects);
        console.log(data.near_earth_objects)
      });
  }, []);

  if (asteroids) {
    return (
      <div className="asteroidsContainer">
        {asteroids.map(({ ...asteroid }) => {
          return (
            <div className="card mb-3 text-center" key={asteroid.id}>
              <div className="card-header">
                First observation: {asteroid.orbital_data.first_observation_date} | Last observation: {asteroid.orbital_data.last_observation_date}
              </div>
              <div className="card-body">
                <h5 className="card-title">{asteroid.name}</h5>
                <p className="card-text">{asteroid.orbital_data.orbit_class.orbit_class_description}</p>
                <a href={`/asteroid/${asteroid.id}`} className="btn btn-primary">Nearest approach</a>
              </div>
              <div className="card-footer text-muted">
                Max estimated diameter (km): {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} | Min estimated diameter (km): {asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  else {
    return <p>Loading...</p>
  }
}


export default InfosAsteroids;
