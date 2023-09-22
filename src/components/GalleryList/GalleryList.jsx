import GalleryItem from "../GalleryItem/GalleyItem"

export default function GalleryList({ gallery, clickLike }){

    return(<>
    {gallery.map(item => 
                 <GalleryItem key={item.id} item={item} clickLike={clickLike}/>
            )}
    </>)
}