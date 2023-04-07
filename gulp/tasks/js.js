// import webpack from "webpack-stream";

// export const js = () => {
//     return app.gulp
//         .src(app.path.src.js, { sourcemaps: app.isDev })
//         .pipe(
//             app.plugins.plumber(
//                 app.plugins.notify.onError({
//                     title: "JS",
//                     message: "Error: <%= error.message %>",
//                 })
//             )
//         )
//         .pipe(
//             webpack({
//                 mode: app.isBiuld ? "production" : "development",
//                 output: {
//                     filename: "app.min.js",
//                 },
//             })
//         )
//         .pipe(app.gulp.dest(app.path.build.js))
//         .pipe(app.plugins.browsersync.stream());
// };

import webpack from "webpack-stream";

// задаем переменные с путями к исходным и конечным файлам для каждого из HTML-файлов
const jsSources = {
    app: {
        src: "src/js/app.js",
        dest: "build/js/app.min.js",
    },
    test: {
        src: "src/js/app-test.js",
        dest: "build/js/test.min.js",
    },
};

// задаем отдельную задачу Gulp для каждого HTML-файла

export const js = {
    jsApp: () => {
        return app.gulp
            .src(app.path.src.js, { sourcemaps: app.isDev })
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "JS",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            .pipe(
                webpack({
                    mode: app.isBuild ? "production" : "development",
                    output: {
                        filename: "app.min.js",
                    },
                })
            )
            .pipe(app.gulp.dest(app.path.build.js))
            .pipe(app.plugins.browsersync.stream());
    },

    jsTest: () => {
        return app.gulp
            .src(app.path.src.js, { sourcemaps: app.isDev })
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "JS",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            .pipe(
                webpack({
                    mode: app.isBuild ? "production" : "development",
                    output: {
                        filename: "test.min.js",
                    },
                })
            )
            .pipe(app.gulp.dest(app.path.build.js))
            .pipe(app.plugins.browsersync.stream());
    },
};
