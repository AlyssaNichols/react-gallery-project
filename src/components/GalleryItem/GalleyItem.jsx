import React, { useState } from 'react';
export default function GalleryItem({item, clickLike, handleDelete}){

    const [showImage, setShowImage] = useState(true);
    
    const toggleImageDescription = () => {
        setShowImage((prevState) => !prevState);
      };
    

    return(
        <>
         <div style={{
        display: "inline-block",
        justifyContent: "space-evenly",
        maxWidth: "75%",
        margin: "20px",
      }}
    >
        {/* Step 3: Conditionally render the content */}
        {showImage ? (
          <img src={item.path} alt={item.description} onClick={toggleImageDescription} />
        ) : (
          <div style={{
            border: "1px solid black",
            justifyContent: "center",
            marginTop: "auto",
            padding: "10px"
          }}onClick={toggleImageDescription}>
             <br/>
            <br/>
            <p style={{
                height: "100px",
                textAlign: "center",
                width: "370px",
                fontSize: "18px"
            }}>{item.description}</p>
            <p style={{
                color: "gray"
            }}>(Click to switch back to photo)</p>
            <br/>
            <br/>
        </div>

        )}
        <br/>
        <br/>
      <button className="likeButton" onClick={() => clickLike(item.id)}>Love this pic!</button>
      <button className="deleteButton" onClick={() => handleDelete(item.id)}>Delete this pic</button>
      <p>{item.likes} people love this pic</p>
    </div>
        </>
    )
}