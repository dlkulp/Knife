"use strict";
const authentication = require("./authentication");
const user = require("./user");
const rethink = require("rethinkdbdash");
const rethinkDB = require("feathers-rethinkdb");

module.exports = function () {
	const app = this;

	app.configure(authentication);
	app.configure(user);
	
	app.use("/user", user);
	
	// RethinkDB setup
	var dbName = "feathers";
	var tableName = "users";
	
	const r = rethink({
		db: dbName
	});
	
	// Create db if it doesn't exist
	r.dbList().contains(dbName)
		.do(dbExists => r.branch(dbExists, {create: 0}, r.dbCreate(dbName))).run()
		
		// Create table if doesn't exist
		.then(() => {
			return r.db(dbName).tableList().contains(tableName)
			.do(tableExists => r.branch(tableExists, {created: 0}, r.tableCreate(tableName))).run()
		});
};
