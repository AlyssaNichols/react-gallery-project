import React, { useState } from "react";

// GalleryItem function
export default function GalleryItem({ item, clickLike, handleDelete }) {
  // state
  const [showImage, setShowImage] = useState(true);

  // for showing the image or the description
  const toggleImageDescription = () => {
    setShowImage((prevState) => !prevState);
  };

  // SVG icon from likes (heart)
  const heartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      fill="currentColor"
      viewBox="0 0 512 512"
    >
      <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
    </svg>
  );
  // SVG icon for delete (trash can)
  const deleteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      fill="currentColor"
      viewBox="0 0 448 512"
    >
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  );

  // what shows on the page
  return (
    <>
      <div
        style={{
          display: "inline-block",
          justifyContent: "space-evenly",
          maxWidth: "75%",
          margin: "20px",
        }}
      >
        {/* Conditionally render the content */}
        {showImage ? (
          <img
            src={item.path}
            alt={item.description}
            onClick={toggleImageDescription}
          />
        ) : (
          <div
            style={{
              border: "1px solid black",
              justifyContent: "center",
              marginTop: "auto",
              padding: "10px",
              borderRadius: "5px",
            }}
            onClick={toggleImageDescription}
          >
            <br />
            <br />
            <p
              style={{
                height: "100px",
                textAlign: "center",
                width: "370px",
                fontSize: "18px",
              }}
            >
              {item.description}
            </p>
            <p
              style={{
                color: "gray",
              }}
            >
              (Click to switch back to photo)
            </p>
            <br />
            <br />
          </div>
        )}
        <br />
        <br />
        <button className="likeButton" onClick={() => clickLike(item.id)}>
          {heartIcon} Love this pic!
        </button>
        <button className="deleteButton" onClick={() => handleDelete(item.id)}>
          {deleteIcon} Delete this pic
        </button>
        <p>{item.likes} people love this pic</p>
      </div>
    </>
  );
}
