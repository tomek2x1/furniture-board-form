const express = require('express');
const router = express.Router();
const Orders = require('../models/orders')

const cors = require("cors");
router.use(cors());

/* POST home page. */
router.post('/', ({body}, res) => {

    const objElement = {
      "orderName": body.orderName,
      "boardType": body.boardType,
      "boards": body.data,
    }

    const model = new Orders(objElement);

    model.save(err => {
      res.json(err)
    })
});

module.exports = router;