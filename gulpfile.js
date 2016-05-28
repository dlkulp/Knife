const gulp = require("gulp");
const webpack = require("gulp-webpack");
const args = require("yargs").argv;

gulp.task("build", () => {
	return gulp.src("./public/src/main.js")
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(gulp.dest("./public/dist/js"));
});
