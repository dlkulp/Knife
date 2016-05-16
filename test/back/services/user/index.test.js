"use strict"

import test from "ava";

const app = require("../../../src/app");
const assert = require("assert");

test("The users service has registered", t => {
	t.truthy(app.service("users"));
});
