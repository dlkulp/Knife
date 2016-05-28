"use strict";

const path = require("path");
const cluster = require("cluster");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3030;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Enable middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));
app.use(compression());

// Configure routes

if (cluster.isMaster) {
	// Fork processes
	const cpuNum = require("os").cpus().length;
	for (let i = 0; i < cpuNum; i++) cluster.fork();
} else {
	// Launch the server on a worker instance
	app.listen(port, () => {
		console.log(`Cluster worker ${cluster.worker.id} listening on port ${port}`);
	});
}

cluster.on("exit", worker => {
	console.log(`Game over, ${worker.id}. Continue?`);
	cluster.fork();
});
