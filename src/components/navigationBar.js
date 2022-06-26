import React from "react";
import { Input, Button } from "antd";
import logo from "../assets/images/my_unsplash_logo.svg";
import { SearchOutlined } from "@ant-design/icons";

import "./navigationBar.css";

function NavigationBar({ showAddPhotoModal }) {
  return (
    <>
      <nav>
        <div className="logo-and-search-container">
          <div className="image-and-searchbar">
            <img src={logo} alt="" />
            <Input
              className="search-bar"
              size="large"
              placeholder="Search By the name"
              prefix={<SearchOutlined />}
            />
          </div>
          <Button
            className="add-button"
            onClick={showAddPhotoModal}
            type="primary"
          >
            Add a photo
          </Button>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
