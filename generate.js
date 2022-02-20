const fs = require("fs");
const classes = require("./js/classes");
const origins = require("./js/origins");
const {
  oneCost,
  twoCost,
  threeCost,
  fourCost,
  fiveCost,
} = require("./js/championNames");

const champArrays = [oneCost, twoCost, threeCost, fourCost, fiveCost];
let champions = [];

for (let [index, array] of champArrays.entries()) {
  for (let unit of array) {
    let unitOrigins = [];
    for (let origin of origins) {
      if (origin.champions.indexOf(unit) !== -1) {
        unitOrigins.push(origin.name);
      }
    }
    let unitClasses = [];
    for (let item of classes) {
      if (item.champions.indexOf(unit) !== -1) {
        unitClasses.push(item.name);
      }
    }
    champions.push({
      name: unit,
      cost: index + 1,
      origins: unitOrigins,
      classes: unitClasses,
    });
  }
}

function generateJson(fileName, data) {
  fs.writeFile(fileName, JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }
    console.log("Finished writing ", fileName);
  });
}

generateJson("./data/origins.json", origins);
generateJson("./data/classes.json", classes);
generateJson("./data/champions.json", champions);
