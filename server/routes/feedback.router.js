const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// post route

router.post('/', (req, res) => {
    console.log(`looking at feedback`)
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`

    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        .then(result => {
            res.sendStatus(201)
        })
        .catch(error => {
            res.sendStatus(500)
            console.log('Error in POST route', error);
        })
    }
)


module.exports = router;