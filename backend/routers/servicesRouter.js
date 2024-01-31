const express = require("express");
const router = express.Router();
const {addAllService,getAllService}= require("../controllers/serviceCotroller")

router.post("/add-service",addAllService)

router.post("/get-service",getAllService)

module.exports = router;
