import { Link } from "react-router-dom";
import { Menu } from "antd";
import React from "react";
import "../App.css";

const HeaderPerso = () => {
  return (
    <Menu mode="horizontal" className="header">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="marsPictures">
        <Link to="/marsPictures">Mars pictures</Link>
      </Menu.Item>
    </Menu>
  );
};

export default HeaderPerso;