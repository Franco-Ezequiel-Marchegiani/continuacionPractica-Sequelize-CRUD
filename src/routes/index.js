const express = require("express");

const genresRoutes = require("./genresRoutes");
const moviesRoutes = require("./moviesRoutes");
const apiRouter = require("./api");
const actorsRouter = require("./actorsRouter");

const router = express.Router();

router.use(moviesRoutes);
router.use(genresRoutes);
router.use(actorsRouter);
router.use("/api", apiRouter);

module.exports = router;
