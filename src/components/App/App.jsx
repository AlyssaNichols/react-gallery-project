import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


function App() {
const [galleryList, setGalleryList] = useState([])

useEffect(() => {
  getGallery();
}, []);

const getGallery = () => {
  console.log("running getGallery")
  axios.get('/gallery')
    .then((response) => {
      setGalleryList(response.data);
    })
    .catch((error) => {
      console.log('Error in GETting gallery', error);
    });
};

const clickLike = (id) => {
  axios.put(`/gallery/like/${id}`)
    .then((response) => {
      getGallery();
    })
    .catch((error) => {
      console.log('Error in clicking like PUT', error);
    });
};

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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList clickLike={clickLike} galleryList={galleryList} handleDelete={handleDelete}/>
      </div>
    );
}

// galleryItems={galleryItems}

export default App;