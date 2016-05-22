'use strict';

const dbConfig = require("../dbConf");
const hooks = require('./hooks');
const rethink = require("rethinkdbdash");

const r = rethink({
	db: dbConfig.name
})

class Service {
	constructor(options) {
		this.options = options || {};
	}

	find(params) {
		return Promise.resolve([]);
	}

	get(id, params) {
		return Promise.resolve(r.db(dbConfig.name).table(dbConfig.tables.users).get(id).run(
			function(err, data){
				if(err){
					console.log("Error!");
					console.log(err);
					return {};
				}
				
				else
				{
					return data;
				}
			}));		
	}

	create(data, params) {
		if(Array.isArray(data)) {
			return Promise.all(data.map(current => this.create(current)));
		}

		return Promise.resolve(data);
	}

	update(id, data, params) {
		return Promise.resolve(data);
	}

	patch(id, data, params) {
		return Promise.resolve(data);
	}

	remove(id, params) {
		return Promise.resolve({ id });
	}
}

module.exports = function(){
	const app = this;

	// Initialize our service with any options it requires
	app.use('/users', new Service());

	// Get our initialize service to that we can bind hooks
	const userService = app.service('/users');

	// Set up our before hooks
	userService.before(hooks.before);

	// Set up our after hooks
	userService.after(hooks.after);
};

module.exports.Service = Service;
