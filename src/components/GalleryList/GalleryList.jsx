import GalleryItem from "../GalleryItem/GalleyItem";

// GalleryList function- takes in 3 props
export default function GalleryList({ galleryList, clickLike, handleDelete }) {
  // what will be returned on the page- map function to access each item in GalleryList
  return (
    <>
      {galleryList.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          clickLike={clickLike}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
}
