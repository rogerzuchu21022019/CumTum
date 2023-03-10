const express = require("express");
const path = require("path");

const ManagerMiddleware = require("./middlewares/ManageMiddleware");
const HandlerError = require("./middlewares/HandleError");

const ApiManagerRouter = require("./routes/manager/ApiManager");
// const WebManagerRouter = require("./routes/manager/WebManager");

const app = express();


ManagerMiddleware(app);

const fixPublic = express.static(path.join(__dirname, "public"));

ApiManagerRouter(app, fixPublic);
// WebManagerRouter(app, fixPublic);

HandlerError(app)

module.exports = app;

