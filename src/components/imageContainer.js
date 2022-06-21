import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import "./imageContainer.css";

const images = [
  "https://picsum.photos/200/300?image=1050",
  //...
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  //...
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  //...
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  //...
  "https://picsum.photos/300/300?image=206",
  //...
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  //...
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  //...
  "https://picsum.photos/300/300?image=206",
];

function ImageContainer() {
  return (
    <ResponsiveMasonry className="masonry-container" columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry  columnsCount={3} gutter="20px">
        {images.map((image, i) => (
          <img
          className="image-item"
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
            alt={i}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
