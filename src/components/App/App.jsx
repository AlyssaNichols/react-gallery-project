import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import AddForm from "../AddForm/AddForm";

// use state in this component and pass through the props
function App() {
  const [galleryList, setGalleryList] = useState([]);
  let [newPath, setNewPath] = useState("");
  let [newDescription, setNewDescription] = useState("");
  let [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    getGallery();
  }, []);
  // axios GET function
  const getGallery = () => {
    console.log("running getGallery");
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("Error in GETting gallery", error);
      });
  };

    // POST FUNCTION
  // It will then clear the inputs
  const addPhoto = () => {
    // make sure the required fields are filled out
    if (!newPath || !newDescription) {
      alert("Please fill in all fields!");
    }

    // POST FUNCTION
    axios
      .post("/gallery", {
        path: newPath,
        description: newDescription,
      })
      .then((response) => {
        // clear input fields
        getGallery();
        setNewPath("");
        setNewTitle("");
        setNewDescription("");
      })
      .catch((error) => {
        alert("Error in POSTing new photo");
      });
  };
  // PUT function to change the "likes" on each photo
  const clickLike = (id) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        console.log("Error in clicking like PUT", error);
      });
  };
  // PUT function to change the "likes" on each photo
  const resetLikes = () => {
    axios
      .put(`/gallery/reset/`)
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        console.log("Error in resetting likes PUT", error);
      });
  };


  // DELETE function to remove a photo from the online gallery AND database
  const handleDelete = (id) => {
    axios
      .delete(`/gallery/delete/${id}`)
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        console.log("Error in handleDelete", error);
      });
  };

  // what will be returned on the page
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <AddForm
        getGallery={getGallery}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newPath={newPath}
        setNewPath={setNewPath}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        addPhoto={addPhoto}
      />
      <GalleryList
        clickLike={clickLike}
        galleryList={galleryList}
        handleDelete={handleDelete}
        resetLikes={resetLikes}
      />
    </div>
  );
}

export default App;
