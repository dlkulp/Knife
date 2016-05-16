const p = {
	feathers: "./src",
	vue: "./public/src/main.js",
	dest: "./public/dist/js"
};

export default function* () {
	yield this.start(["build"]);
}

export function* build() {
	yield this
		.source(p.vue)
		.webpack(require("./webpack.config.js"));
}
