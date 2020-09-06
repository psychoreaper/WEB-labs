const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    name: "./src/name.js",
    pokemon: "./src/pokemon.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
