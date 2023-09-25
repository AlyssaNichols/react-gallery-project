const express = require("express");
const router = express.Router(); 
const pool = require("../modules/pool");
// const galleryItems = require('../modules/gallery.data');

// PUT Route from DB
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const queryText = `UPDATE "gallery" SET "likes"=("likes"+1) WHERE "id"=$1;`;
  pool
    .query(queryText, [id])
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log("error caught in PUT /like: ", error);
    });
});
// END PUT ROUTE

// GET route from DB
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;
  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database GET request`, error);
      res.sendStatus(500);
    });
});
// END GET ROUTE

// //POST to add new photo into gallery
router.post("/", (req, res) => {
  const photo = req.body;
  const query = `INSERT INTO "gallery" ("path", "title", "description")
                   VALUES ($1, $2, $3);`;
  pool
    .query(query, [photo.path, photo.title, photo.description])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error in POST: ", error);
      res.sendStatus(500);
    });
});
// END POST ROUTE

// This DELETE with ID as a param - /gallery/delete/:id
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const queryText = `DELETE FROM "gallery" WHERE "id"=$1;`;
  pool
    .query(queryText, [id])
    .then(() => res.sendStatus(204))
    .catch((error) => {
      console.log("Error in DELETE with id", error);
      res.sendStatus(500);
    });
}); // END DELETE ROUTE

// DO NOT MODIFY THIS FILE FOR BASE MODE

// what was originally the meat of the put function before DB hookup
// for(const galleryItem of galleryItems) {
//     if(galleryItem.id == galleryId) {
//         galleryItem.likes += 1;
//     }
// }
// res.sendStatus(200);
//  END PUT Route

// GET Route provided before DB hookup
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// });
// END GET Route

module.exports = router;
