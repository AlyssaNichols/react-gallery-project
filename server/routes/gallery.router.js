const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// router.put("/:id", (req, res) => {
//     const id = req.params.id;
//     console.log("PUT route in /gallery/id with id of", id);
//     const item = req.body;
//     let queryText = `UPDATE "gallery" SET "likes" = likes + 1 WHERE "id" = $1; `;
//     pool
//     .query(queryText, [id])
//     .then(() => {
//         res.sendStatus(204);
//     }).catch((err) => {
//         console.log("error in PUT", err);
//         res.sendStatus(500);
//     });
// });




// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); 
// END GET Route

// router.get('/', (req, res) => {
// const queryText = `SELECT * FROM "gallery";`;
// pool
// .query(queryText)
// .then((result) => {
//     res.send(result.rows)
// })
// .catch((error) => {
//     console.log(`Error making database GET request`, error);
//     res.sendStatus(500);
// });
// });

module.exports = router;