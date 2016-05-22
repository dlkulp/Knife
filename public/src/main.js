import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./components/Home.vue";
import Browse from "./components/Browse.vue";
// import App from "./App.vue";

const App = Vue.extend({});

Vue.use(VueRouter);
var router = new VueRouter({
	history: false
});

router.map({
	"/": {
		name: "root",
		component: Home
	},
	"/browse": {
		name: "browse",
		component: Browse
	}
});

/* eslint-disable no-new */
// new Vue({
// 	el: "body",
// 	components: { App }
// });

router.start(App, "body");
