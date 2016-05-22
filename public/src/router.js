import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./pages/HomePage.vue";

Vue.use(VueRouter);
var router = new VueRouter({
	history: false
});

router.map({
	"/path": {
		component: HomePage
	}
});

export default router;
