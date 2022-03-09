import React, { useState, useEffect } from "react";
import "../App.css";

const PictureOfTheDay = () => {
  const [apod, setApod] = useState()

  useEffect(() => {
    fetch('/pictureOfTheDay')
      .then(res => res.json())
      .then(data => {
        setApod(data)
        console.log(data)
      })
  }, [])

  if (apod) {
    return (
      <div className="App-header">
        <h1>Astronomy Picture Of the Day</h1>
        <div className="apodContainer">
          <img className="apodImg" src={apod.hdurl} />
          <div className="descriptionContainer">
            <h3>{apod.title}</h3>
            <p>{apod.explanation}</p>
            <p className="apodDate">Picture of the: {apod.date}</p>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <p>Loading...</p>
  }
}

export default PictureOfTheDay