import React, { useState, useEffect } from 'react';
import InfosAsteroids from './components/InfosAsteroids';
import AsteroidDetails from './components/AsteroidDetails';
import MarsPhotos from './components/MarsPhotos';
import HeaderPerso from './components/HeaderPerso';
import PictureOfTheDay from './components/PictureOfTheDay';
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import './App.css';

const { Header, Content } = Layout;

const App = () => {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  //return <MarsPhotos></MarsPhotos>
  return (
    <Layout>
      <div className="App">
        <Header className="header">
          <HeaderPerso />
        </Header>
        <Layout>
          <Content className="content">
            <Routes>
              <Route path="/" element={<PictureOfTheDay />} />
              <Route path="/marsPictures" element={<MarsPhotos />} />
              <Route path="/asteroidsInfos" element={<InfosAsteroids />} />
              <Route path="/asteroid/:id" element={<AsteroidDetails />} />
            </Routes>
          </Content>
        </Layout>
        {currentTime}
      </div>
    </Layout>
  )
} 


export default App;
