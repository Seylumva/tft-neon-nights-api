const express = require("express");
const {
  showIndex,
  getChampions,
  getItems,
  getOrigins,
  getClasses,
  getTraits,
} = require("../controllers/controller");
const router = express.Router();

router.route("/").get(showIndex);

router.route("/champions").get(getChampions);

router.route("/items").get(getItems);

router.route("/origins").get(getOrigins);

router.route("/classes").get(getClasses);

router.route("/traits").get(getTraits);

module.exports = router;
