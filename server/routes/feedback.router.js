const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// post route

router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(queryText, [values])
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