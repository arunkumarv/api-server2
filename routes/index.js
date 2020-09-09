var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/apis/DistrictCountAccusedSearch", function (req, res, next) {
  res.json([
    { count: 13, district: "SALEM" },
    { count: 18, district: "MADURAI" },
    { count: 23, district: "COIMBATORE" },
    { count: 10, district: "THANJAORE" },
    { count: 13, district: "ERODE" }
  ]);
});

router.get("/apis/AgeGroupCountAccusedSearch", function (req, res, next) {
  res.json([
    { age_group: "35-39", count: 61 },
    { age_group: "40-44", count: 55 },
    { age_group: "50-54", count: 50 },
    { age_group: "30-34", count: 42 },
    { age_group: "55-59", count: 25 }
  ]);
});

router.get("/apis/CountOfCaseType", function (req, res, next) {
  res.json([
    { case_type: "ROAD ACCIDENT", count: 153 },
    { case_type: "CRIME", count: 124 },
    { case_type: "PROHIBITION", count: 61 },
    { case_type: "L&O", count: 47 },
    { case_type: "OTHER ACTS", count: 29 }
  ]);
});

module.exports = router;
