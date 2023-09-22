# React - Gallery of My Life

## Setup

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```


## Description

There is no database component to this so all the data is stored in an array on the server. Each image has an `id`, `title`, `description` and `path for` to access them. Each `id` is a unique number.

In this proeject I have created a gallery page to share pictures of things that are important to me. Visitors can click on an image to see a description and use a button to "like" an image. 

In this project I used 3 components:

- `App` - represents the overall application or site 
- `GalleryList` - represents the gallery of images
- `GalleryItem` - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.

### Tasks completed
- Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.
- Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
    - Iterate (loop over) the list of gallery data
    - Make GalleryItems
- Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`. 
    - Update the `GalleryList` to use this component to display an image.
    - Swap the image with the description on click.
    - Display the number likes for each item and include a like button.
    - When the like button is clicked, use `Axios` to update (`PUT`) the like count
    - Update the gallery each time a like button is clicked.

    