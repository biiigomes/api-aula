const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: 'API - aulas',
        version: '1.1.1'
    });
});

module.exports = router;