const express = require("express");
const router = express.Router();
const {
  getAllservice,
  addAllservice,
  editService,
  deleteService,
} = require("../controllers/serviceCotroller");

router.post("/get-service", getAllservice);

router.post("/edit-service", editService);

router.post("/delete-service", deleteService);

router.post("/add-service", addAllservice);

module.exports = router;
