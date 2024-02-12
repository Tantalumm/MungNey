const express = require("express");
const router = express.Router();
const {getAllservice, addAllservice}= require("../controllers/serviceCotroller")

router.post("/get-service",getAllservice)

router.post("/add-service",addAllservice)

module.exports = router;
