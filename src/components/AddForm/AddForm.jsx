import axios from "axios";
import {useState} from "react";

// This function will display or hide an "add a photo" form
// with text inputs for the img url, a title and a description of the photo
// It will also do a POST with the new information and add it to the database
export default function AddForm({getGallery, newPath, setNewPath, newDescription, setNewDescription}) {


    // POST FUNCTION
    // It will then clear the inputs
    const addPhoto = () => {
        if (!newPath || !newDescription) {
            alert('Please fill in all fields!');
        }; 
      axios.post("/gallery", {
        path: newPath,
        description: newDescription,
      }).then((response) => {
        getGallery();
        setNewPath("");
        setNewDescription("");
      })
        .catch((error) => {
            alert("Error in POSTing new photo");
        });
    };

    // Determines what should be rendered depending on the toggle's
    // current state
    // If the toggle is false, then display the form and inputs

        return (
            <>
            <h2>Add Photo</h2>
            <input 
                placeholder="URL"
                className="form-inputs"
                value={newPath}
                onChange={(event) => setNewPath(event.target.value)}>
            </input>
            <input 
                placeholder="Description"
                className="form-inputs"
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}>
            </input>
            <div className="addFormBtnDiv">
                <button className='addFormBtn submitBtn' onClick={() => {addPhoto()}}>Add</button>
            </div>
            </>
            
        )
    } 
