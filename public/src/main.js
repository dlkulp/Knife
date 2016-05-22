/* global $ */
/* global feathers */
import Vue from "vue";
import App from "./App.vue";

/* eslint-disable no-new */
new Vue({
	el: "body",
	components: { App }
});

// Authentication
let host = "//localhost:955";

// Set up Feathers client side
let app = feathers()
	.configure(feathers.rest(host).jquery($))
	.configure(feathers.hooks())
	.configure(feathers.authentication({ storage: window.localStorage }));

// Authenticate
$("#loginSubmin").click(() => {
	app.authenticate({
		type: "local",
		email: $("#luname").val(),
		password: $("#lpass").val()
	}).then(() => {
		console.log("Authenticated!", app.get("token"));
	}).catch((error) => {
		console.error("Error authenticating!", error);
	});
});

// Browser Initialization
/* eslint-env browser */
$(document).ready(() => {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$(".modal-trigger").leanModal();
});
