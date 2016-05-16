"use strict";

import test from "ava";

const app = require("../../../../src/app");

test("The users service has registered", t => {
	t.truthy(app.service("users"));
});
