/* === dont forget to import style to main.js file === */
/* ===> import './main.styl'; <=== */
var path = require("path");
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require("webpack");

module.exports = {
    entry: "./_sources/js/app.js",
    output: {
        path: path.resolve(__dirname, "./js"),
        filename: "main.bundle.js",
        publicPath: devMode ? '/js/' : "/js/"
        // publicPath: "./"
    },
    devServer: {
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "eslint-loader",
                        options: {
                            emitError: true,
                            emitWarning: true
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        modules: ["node_modules"]
    }
};