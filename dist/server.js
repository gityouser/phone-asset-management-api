"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServer = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = require("body-parser");

var _db = require("./utils/db");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.disable('x-powered-by');
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extend: true
}));

function createData(type, serial, color, metaData) {
  return {
    type,
    serial,
    color,
    metaData
  };
}

const rows = [createData("asdfasdf", "ISADFN", 1324171354, 3287263), createData("Chisadfasdfna", "CASDFN", 1403500365, 9596961), createData("Itasdfasdfgasfgaly", "SADFIT", 60483973, 301340), createData("Unisadfted Stasfgasgates", "UASADFS", 327167434, 9833520), createData("Canasfgasfgada", "CFASDA", 37602103, 9984670), createData("Ausasfgasftralia", "ASFAU", 25475400, 7692024), createData("Geasfgrmany", "FGFDE", 83019200, 357578), createData("Irasfgasfgeland", "ASIE", 4857000, 70273), createData("Mesafgasfxico", "MGFAX", 126577691, 1972550), createData("Jaadsfgsfgpan", "SADFJP", 126317000, 377973), createData("Fraasfgsfnce", "SADFFR", 67022000, 640679), createData("Unidsfgsdfted Kdsfgingfsdgsdfgdom", "SFGGB", 67545757, 242495), createData("Ruasfdgassia", "GARUASF", 146793744, 17098246), createData("Nasfgigefsaria", "NASFGG", 200962417, 923768), createData("Brasfgaasfgzil", "ASFGDBR", 210147125, 8515767)];

const startServer = async () => {
  try {
    await (0, _db.connect)();
    app.listen(_config.port, () => console.log(`Asset management API on http://localhost:${_config.port}`));
  } catch (err) {
    console.error(err);
  }
};

exports.startServer = startServer;