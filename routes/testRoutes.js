const express = require("express");
const {
  getDatas,
  getData,
  createData,
  deleteData,
  updateData,
} = require("../controllers/testController");

const router = express.Router();

router.get("/", getDatas);
router.get("/:id", getData);
router.post("/", createData);
router.delete("/:id", deleteData);
router.patch("/:id", updateData);

module.exports = router;
