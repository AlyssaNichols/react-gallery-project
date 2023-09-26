
// This function will display an "add photo" form
// There are text inputs for the img url, title, and a description of the photo
// It will do a POST with the new information and add it to the database
export default function AddForm({
  newTitle,
  setNewTitle,
  newPath,
  setNewPath,
  newDescription,
  setNewDescription,
  addPhoto
}) {


  // what will post to the page
  return (
    <> <form>
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
      </form>
    </>
  );
}
