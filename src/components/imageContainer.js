import axios from "axios";
import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Spin, Button, message } from "antd";
import "./imageContainer.css";


async function deleteImage(id){
  try {
      await axios.delete(`https://my-unsplash-at.herokuapp.com/delete-image/${id}`)
      message.success("Picture deleted. Refreshing the page")
      window.location.reload(false);
  } catch (error) {
    message.error("Could not delete the image")
  }
}

function ImageContainer() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-unsplash-at.herokuapp.com/get-all-images")
      .then((data) => {
        setImages(data.data);
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
  }, []);

  

  return images.length > 0 ? (
    <ResponsiveMasonry
      className="masonry-container"
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
      <Masonry columnsCount={3} gutter="20px">
        {images.map((image, i) => {
          console.log("IMAGES", image);
          return (
            <div className="pic">
              <img
                className="image-item"
                key={i}
                src={`https://my-unsplash-at.herokuapp.com/image/${image._id}`}
                style={{ width: "100%", display: "block" }}
                alt={i}
              />
              <div class="delete">
                <Button ghost danger onClick={()=> deleteImage(image._id)} style={{borderRadius:"20px"}}>delete</Button>
              </div>
            </div>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  ) : (
    <Spin size="large" />
  );
}

export default ImageContainer;
