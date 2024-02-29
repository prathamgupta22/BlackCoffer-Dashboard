import express from "express";
import { Data } from "../model/data.models.js";

const router = express.Router();

// Define routes
router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/filter", async (req, res) => {
  const {
    end_year,
    topic,
    sector,
    region,
    pestle,
    source,
    swot,
    country,
    city,
  } = req.query;

  let filterQuery = {};

  if (end_year) {
    filterQuery.end_year = end_year;
  }

  if (topic) {
    filterQuery.topic = { $in: topics.split(",") };
  }

  if (sector) {
    filterQuery.sector = sector;
  }

  if (region) {
    filterQuery.region = region;
  }

  if (pestle) {
    filterQuery.pestle = pestle;
  }

  if (source) {
    filterQuery.source = source;
  }

  if (swot) {
    filterQuery.swot = swot;
  }

  if (country) {
    filterQuery.country = country;
  }

  if (city) {
    filterQuery.city = city;
  }

  try {
    const filteredData = await Data.find(filterQuery);
    res.json(filteredData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
