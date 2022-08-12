var express = require("express");
var path = require("path");
var indexRouter = require("./routes/index");
const common = require("./src/common");
var app = express();
common.initDb();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
common.initRegion();
common.initCategory();
app.listen(3000);
