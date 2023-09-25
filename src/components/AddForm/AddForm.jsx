import axios from "axios";
import { useState } from "react";

// This function will display an "add photo" form
// There are text inputs for the img url, title, and a description of the photo
// It will do a POST with the new information and add it to the database
export default function AddForm({
  getGallery,
  newTitle,
  setNewTitle,
  newPath,
  setNewPath,
  newDescription,
  setNewDescription,
}) {
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

  // what will post to the page
  return (
    <> 
      <h2 className="formHeader">Add Photo to the Gallery</h2>
      <input
        placeholder="Image URL"
        className="form-inputs"
        value={newPath}
        onChange={(event) => setNewPath(event.target.value)}
        required
      ></input>
      <input
        placeholder="Image Title"
        className="form-inputs"
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      ></input>
      <input
        placeholder="Image Description"
        className="form-inputs"
        value={newDescription}
        onChange={(event) => setNewDescription(event.target.value)}
        required
      ></input>
      <div className="addFormButtonDiv">
        <br />
        <button
          className="addFormButton"
          onClick={() => {
            addPhoto();
          }}
        >
          Add Photo
        </button>
        <br />
        <br />
        <hr />
      </div>
    </>
  );
}
