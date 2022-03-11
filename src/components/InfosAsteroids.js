import React, { useState, useEffect } from 'react';
import '../App.css';

const InfosAsteroids = () => {
  const [asteroids, setAsteroids] = useState();

  useEffect(() => {
    fetch('/infosAsteroids')
      .then(res => res.json())
      .then(data => {
        setAsteroids(data.near_earth_objects);
        
        console.log(data)
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
              <h5 className="card-title">{asteroid.name}</h5>
              </div>
              <p className="card-text withBottomSeparator">Max estimated diameter (km): <span className='boldText'>{asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}</span></p>
                <p className="card-text withBottomSeparator">Min estimated diameter (km): <span className='boldText'>{asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)}</span></p>

              <p className="card-text withBottomSeparator">Observations number: <span className='boldText'>{asteroid.orbital_data.observations_used}</span></p>
              <div className="card-body">
                <p className="card-text boldText">Orbital description: </p>
                <p>{asteroid.orbital_data.orbit_class.orbit_class_description}</p>
                <a href={`/asteroid/${asteroid.id}`} className="btn btn-warning asteroidBtn">Nearest approach</a>
              </div>
              <div className="card-footer text-muted">
                <p className="card-text withBottomSeparator">First observation: <span className='boldText'>{asteroid.orbital_data.first_observation_date}</span></p> 
                <p className="card-text">Last observation: <span className='boldText'>{asteroid.orbital_data.last_observation_date}</span></p>
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
