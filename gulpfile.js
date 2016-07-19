const del = require("del");
const args = require("yargs").argv;
const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const rsync = require("gulp-rsync");
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

gulp.task("prep", ["build"], () => {
	gulp.src(["./package.json", "./server.js"])
		.pipe(gulp.dest("./temp/"));
	gulp.src(["./public/**"])
		.pipe(gulp.dest("./temp/public/"));
	gulp.src("./routes/**")
		.pipe(gulp.dest("./temp/routes/"));
});

gulp.task("sync", ["prep"], () => {
	if (!!args.pass && !!args.host && !!args.dest && !!args.user) {
		return gulp.src("temp/**")
			.pipe(rsync({
				root: "./temp/",
				hostname: args.host,
				destination: args.dest,
				username: args.user,
				password: args.pass,
				incremental: true,
				progress: true
			}));
	}
	throw new Error("Did you forget the params?");
});
