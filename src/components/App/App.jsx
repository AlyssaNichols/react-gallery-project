import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


function App() {
const [gallery, setGallery] = useState([])

useEffect(() => {
  getGallery();
}, []);

const getGallery = () => {
  console.log("running getGallery")
  axios.get('/gallery')
    .then((response) => {
      setGallery(response.data);
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


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList clickLike={clickLike} gallery={gallery}/>
      </div>
    );
}

// galleryItems={galleryItems}

export default App;