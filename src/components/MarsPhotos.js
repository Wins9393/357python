import React, { useState, useEffect } from 'react';
import '../App.css';

const MarsPhotos = () => {
  const [marsPhotos, setMarsPhotos] = useState();

  useEffect(() => {
    fetch('/marsPhotos')
      .then(res => res.json())
      .then(data => {
        setMarsPhotos(data.photos);
        console.log(data.photos)
      });
  }, []);

  if (marsPhotos) {
    return (
      <div className="App-header">

        {marsPhotos.map(({ ...photoObj }) => {
          return (
            <div className='photoContainer' key={photoObj.id}>
              <img className='photo' src={photoObj.img_src} alt={photoObj.rover.name} />
              <p>Photo taken by: {photoObj.rover.name} </p>
              <p>Date: {photoObj.earth_date}</p>
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


export default MarsPhotos;
