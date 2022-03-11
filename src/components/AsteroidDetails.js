import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const AsteroidDetails = () => {
  const [date, setDate] = useState();
  let { id } = useParams()

  useEffect(() => {
    fetch(`/infosAsteroids/${id}`)
      .then(res => res.json())
      .then(data => {
        setDate(data);
        console.log(data)
      });
  }, []);

  if (date) {
    return (
      <div className="dateWrapper">
        <div className="card cardDate text-center">
          <div className="card-header">Nearest approach informations</div>
          <div className="card-body asteroidCardBody">
            <h5 className="card-title withBottomSeparator">Nearest approach date: <span className='boldText'>{date.close_approach_date_full}</span></h5>
            <h5 className="card-title withBottomSeparator">Distance from earth (km): <span className='boldText'>{parseFloat(date.miss_distance.kilometers).toFixed(1)}</span></h5>
            <h5 className="card-title withBottomSeparator">Velocity (km/h): <span className='boldText'>{parseFloat(date.relative_velocity.kilometers_per_hour).toFixed(1)}</span></h5>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <p>Loading...</p>
  }
}


export default AsteroidDetails;
