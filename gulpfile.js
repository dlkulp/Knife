const args = require("yargs").argv;
const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const shell = require("gulp-shell");
const webpack = require("gulp-webpack");

gulp.task("build", () => {
	return gulp.src("./public/src/main.js")
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(gulp.dest("./public/dist/js"));
});

gulp.task("dev:back", () => {
	nodemon({
		script: "./server.js"
	});
});

gulp.task("dev:front", shell.task(["npm run dev:front"]));
