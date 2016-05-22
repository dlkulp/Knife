/* global feathers */
/* global $ */
import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./components/Home.vue";
import Browse from "./components/Browse.vue";
import UserProfile from "./components/UserProfile.vue";
import TeamProfile from "./components/TeamProfile.vue";
// import App from "./App.vue";

const App = Vue.extend({});

Vue.use(VueRouter);
var router = new VueRouter({
	history: false,
	hashbang: false
});

router.map({
	"/": {
		name: "root",
		component: Home
	},
	"/browse": {
		name: "browse",
		component: Browse
	},
	"/user-profile": {
		name: "user-profile",
		component: UserProfile
	},
	"/team-profile": {
		name: "team-profile",
		component: TeamProfile
	}
});

router.start(App, "body");

let user;
let token;

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
		user = app.user();
		token = app.get("token");
	}).catch((error) => {
		console.error("Error authenticating!", error);
	});
});

// Browser Initialization
/* eslint-env browser */
$(document).ready(() => {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$(".modal-trigger").leanModal();
	$(".parallax").parallax();
	$("ul.tabs").tabs();
});

$("#nav-mobile li a").click(() => {
	location.reload();
});
