const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");

const moviesRoutes = require("./routes/moviesRoutes");
const genresRoutes = require("./routes/genresRoutes");
//Enrutador API en general
const apiRouter = require("./routes/api");
const actorsRouter = require("./routes/actorsRouter");
const methodOverride = require("method-override");
const app = express();
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
//Extensión para que postman lea JSON
app.use(express.json());
// view engine setup
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/", indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRouter);
app.use(apiRouter);

app.listen("3000", () => console.log("Servidor corriendo en el puerto 3000"));
