import React, { useState, useEffect } from "react";
import "../App.css";

const PictureOfTheDay = () => {
  const [apod, setApod] = useState()
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  useEffect(() => {
    fetch(`/pictureOfTheDay/${date}`)
      .then(res => res.json())
      .then(data => {
        setApod(data)
        console.log(data)
      })
  }, [date])

  if (apod && !apod.code) {
    return (
      <div className="App-header">
        <h1>Astronomy Picture Of the Day</h1>
        <div className="apodContainer">
          <img className="apodImg" src={apod.hdurl} alt={apod.id} />
          <div className="descriptionContainer">
            <div>
              <p>Enter date: (YYYY-mm-dd") Between 1995-06-16 and Today</p>
              <input className="dateInput" placeholder="YYYY-mm-dd" value={date} onInput={e => setDate(e.target.value)} />
            </div>
            <div>
              <h3>{apod.title}</h3>
              <p>{apod.explanation}</p>
              <div className="apodDate">
                <p>Picture of the: {apod.date}</p>
                <p>{apod.copyright}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="App-header">
        <h1>Astronomy Picture Of the Day</h1>
        <div className="apodContainerPh">
          <div className="apodImgPh">Picture not found</div>
          <div className="descriptionContainerPh">
            <p>Enter date: (YYYY-mm-dd") Between 1995-06-16 and Today</p>
            <input className="dateInput" placeholder="YYYY-mm-dd" value={date} onInput={e => setDate(e.target.value)} />
            <h3>Picture title</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className="apodDate">Picture of the: Picture date</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PictureOfTheDay