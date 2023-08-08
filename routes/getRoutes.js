const express = require("express");
const routes = express.Router(); // Change variable name to 'routes'
const main = require("../scrapeFn/scrape");

routes.post("/indeed", async (req, res) => {
  // Change 'router' to 'routes'
  try {
    let skill = req.body.skill;
    let scrape = await main(skill);
    return res.status(200).json({
      status: "ok",
      list: scrape.list,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes; // Export the 'routes' instance
