"use strict";
const dbConfig = require("./dbConf");
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
	const r = rethink({
		db: dbConfig.name
	});
	
	// Create db if it doesn't exist
	r.dbList().contains(dbConfig.name)
		.do(dbExists => r.branch(dbExists, {create: 0}, r.dbCreate(dbConfig.name))).run()
		
		// Create tables if doesn't exist
		.then(() => {
			return r.db(dbConfig.name).tableList().contains(dbConfig.tables.users)
			.do(tableExists => r.branch(tableExists, {created: 0}, r.tableCreate(dbConfig.tables.users))).run()
		})
		
		.then(() => {
			return r.db(dbConfig.name).tableList().contains(dbConfig.tables.teams)
			.do(tableExists => r.branch(tableExists, {created: 0}, r.tableCreate(dbConfig.tables.teams))).run()
		});
};
