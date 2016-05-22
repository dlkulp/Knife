"use strict";

const rethink = require("rethinkdbdash");
const dbConf = require("../dbConf");
const hooks = require("./hooks");

// RethinkDB instance
const r = rethink({
	db: dbConf.name
});


// Table variable
var userDB = r.db(dbConf.name).table(dbConf.tables.users);
var teamsDB = r.db(dbConf.name).table(dbConf.tables.teams).run();
var gamesDB = r.db(dbConf.name).table(dbConf.tables.games).run();

class Service {
	constructor(options) {
		this.options = options || {};
	}

	find(params) {
		console.log("user find");
		return Promise.resolve([]);
	}

	// GET /user/id
	get(id, params) {
		console.log("user get");
		console.log(id);

		// User data json holder
		var userData = {
			username: " ",
			desc: " ",
			image: " ",
			teams: [],
			games: []
		};

		// Main heart of function
		var dbCall = function () {
			var teams = teamsDB.value();
			for (var i = 0; i < teams.length; i++) {
				var team = teams[i];

				// If team contains user add data to from team to user
				if (team.users.indexOf(id) > -1) {
					// Add team to user
					userData.teams.push(team.name);

					// Add games from team to user
					userData.games.push(team.games);
				}
			}

			// Get user data
			return new Promise((resolve, reject) => {
				userDB.get(id).run((err, data) => {
					if (err) {
						console.log("Error!");
						console.log(err);
						return {};
					}

					else {
						userData.username = data.username;
						userData.desc = data.desc;
						userData.image = data.image;
					}

					console.log(userData);
					resolve(userData);
				});
			});
		};

		return Promise.resolve(dbCall());
	}

	create(data, params) {
		console.log("user create");
		var userData = data;
		userDB.insert(id).run();
		console.log(userData);
		return Promise.resolve(userData);
	}

	/*
		PUT /user/id
		Expects:
			id (slug)
			username
			password
			email
	*/
	update(id, data, params) {
		console.log("user update");

		// Insert data into userDB
		var userData = data;
		userDB.insert(userData).run();

		console.log(userData);
		return Promise.resolve(userData);
	}

	/*
		PATCH /user/id
		Expects:
			session id
			id (slug)
			username
			password
			email
			description
			link
	*/
	patch(id, data, params) {
		console.log("user patch");
		// If my session id/id matches recieved, replace data

		return Promise.resolve(data);
	}

	remove(id, params) {
		console.log("user remove");
		return Promise.resolve({ id });
	}
}

module.exports = function () {
	const app = this;

	// Initialize our service with any options it requires
	app.use("/users", new Service());

	// Get our initialize service to that we can bind hooks
	const userService = app.service("/users");

	// Set up our before hooks
	userService.before(hooks.before);

	// Set up our after hooks
	userService.after(hooks.after);
};

module.exports.Service = Service;
