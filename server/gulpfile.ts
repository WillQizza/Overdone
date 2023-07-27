import gulp from "gulp";
import ts from "gulp-typescript";
import del from "del";

gulp.task("clean", () => del([
    "./dist/**"
]));

gulp.task("build:typescript", () => {
    return gulp.src("./src/**/*.ts")
                .pipe(ts.createProject("./tsconfig.json")())
                .pipe(gulp.dest("./dist"));
});

gulp.task("build:migrations", () => {
    return gulp.src("./src/migrations/*")
        .pipe(gulp.dest("./dist/migrations"));
});

gulp.task("build", gulp.series(["clean", "build:typescript", "build:migrations"]));