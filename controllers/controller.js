const AppError = require("../utils/AppError");
const champions = require("../data/champions.json");
const classes = require("../data/classes.json");
const origins = require("../data/origins.json");
const items = require("../data/items.json");
const traits = require("../data/origins.json");

const showIndex = (req, res) => {
  res.json({
    routes: ["/champions", "/classes", "/origins", "/items", "/traits"],
  });
};

const getChampions = (req, res) => {
  const { cost, hasClass, hasOrigin } = req.query;

  if (cost || hasClass || hasOrigin) {
    let filteredChampions = [...champions];
    if (cost) {
      if (cost > 5 || cost < 1) {
        throw new AppError("Query 'cost' must be between 1 and 5.", 400);
      }
      filteredChampions = filteredChampions.filter(
        (champion) => champion.cost === Number(cost)
      );
    }

    if (hasClass) {
      filteredChampions = filteredChampions.filter(
        (champion) => champion.classes.indexOf(hasClass) !== -1
      );
    }

    if (hasOrigin) {
      filteredChampions = filteredChampions.filter(
        (champion) => champion.origins.indexOf(hasOrigin) !== -1
      );
    }
    if (!filteredChampions.length) {
      throw new AppError("No units found.", 404);
    }
    res.json(filteredChampions);
    return;
  }

  res.json(champions);
};

const getClasses = (req, res) => {
  res.json(classes);
};

const getOrigins = (req, res) => {
  res.json(origins);
};

const getItems = (req, res) => {
  res.json(items);
};

const getTraits = (req, res) => {
  res.json(traits);
};

module.exports = {
  showIndex,
  getChampions,
  getClasses,
  getOrigins,
  getItems,
  getTraits,
};
