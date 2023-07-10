"use strict";

var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
require("module-alias");
require("module-alias/register");
require("reflect-metadata");
require("./database");
var _routes = require("./routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
app.use((0, _cors.default)(corsOptions));
app.use(_express.default.json());
app.use(_routes.routes);
app.listen(4000, () => console.log("Server is running"));