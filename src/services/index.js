"use strict";
const testing = require('./testing');
const authentication = require("./authentication");
const user = require("./user");
const rethink = require("rethinkdbdash");
const feathersRethinkDB = require("feathers-rethinkdb");

module.exports = function () {
    const app = this;

    app.configure(authentication);
    app.configure(user);
    app.configure(testing);
    
    // Connect to local RethinkDB server, name it "feathers"
    const r = rethink({
        db: "feathers"
    });
    
    // Create db if doesn't exist
    r.dbList().contains("feathers")
        .do(dbExists => r.branch(dbExists, {created: 0}, r.dbCreate("feathers"))).run()
        
        // Create table if doesn't exist
        .then(() => {
            return r.db("feathers").tableList().contains("messages")
                .do(tableExists => r.branch(tableExists, {created: 0}, r.tableCreate("messages"))).run();
        })
        
        // Now register feathers service
        .then(() => {
            app.use("/messages", feathersRethinkDB({
                Model: r,
                name: "messages",
                paginate: {
                    default: 2,
                    max: 4
                }
            }))
        })
        
        // Add message for testing
        .then(() => {
            app.service("messages").create({
                text: "God help me",
                complete: false
            })
        });
};
