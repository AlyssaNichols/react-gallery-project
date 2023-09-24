import GalleryItem from "../GalleryItem/GalleyItem"

export default function GalleryList({ galleryList, clickLike, handleDelete }){

    return(<>
    {galleryList.map(item => 
                 <GalleryItem key={item.id} item={item} clickLike={clickLike} handleDelete={handleDelete}/>
            )}
    </>)
}