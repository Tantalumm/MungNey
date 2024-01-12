const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Service = require('../modules/service');

router.post('/', (req, res) => {
    Service.create(req.body)
      .then(post => {
        console.log(req.body);
        res.json(post);
        console.log(post);
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  });

module.exports = router;