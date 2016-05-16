'use strict'

import test from "ava";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = require("../../src/app");

let server;

test.before(() => {
	server = app.listen(3030);
	server.once("listening", () => {});
	console.log("Server booted");
});

test("Starts and shows index page", t => {
	t.plan(1);

	return new Promise((resolve, reject) => {
		var req = new XMLHttpRequest();

		req.open("GET", "http://localhost:3030");
		req.onload = () => {
			if (req.status === 200)
				resolve(req);
			else
				reject(Error(`Could not reach index: ${req.statusText}`));
		};
		req.onerror = () => {
			reject(Error("Well, shit"));
		};
		req.send();
	}).then(result => t.is(result.status, 200), err => {
		console.log(err);
		t.fail();
	});
});

test("Shows a 404 page", () => {
	return new Promise((resolve, reject) => {
		var req = new XMLHttpRequest();

		req.open("GET", "http://localhost:3030/path/to/nowhere");
		req.onload = () => {
			if (req.status === 404)
				resolve(req);
			else
				reject("Did not return a 404 page.");
		};
		req.onerror = () => {
			reject(Error("Well, shit"));
		};
		req.send();
	});
});

test.after(() => {
	server.close();
	console.log("Server closed");
});
