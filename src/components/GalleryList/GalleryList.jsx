import GalleryItem from "../GalleryItem/GalleyItem";

// GalleryList function- takes in 3 props
export default function GalleryList({
  galleryList,
  clickLike,
  handleDelete,
  resetLikes,
}) {
  // what will be returned on the page- map function to access each item in GalleryList
  return (
    <>
    <br />
      <h4>Click on Photos to see their Description</h4>
      {galleryList.map((item) => (
        <GalleryItem
          key={item.id}
          item={item}
          clickLike={clickLike}
          handleDelete={handleDelete}
        />
      ))}
      <br />
      <button className="resetLikes" onClick={() => resetLikes()}>
        Reset Likes on <b>ALL</b> Photos
      </button>
      <br />
    </>
  );
}
