/* === dont forget to import style to main.js file === */
/* ===> import './main.styl'; <=== */
var path = require("path");
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: "./_sources/js/app.js",
    output: {
        path: path.resolve(__dirname, "./public/_assets"),
        filename: "js/bundle.js",
        chunkFilename: 'js/[name].bundle.js',
        publicPath: devMode ? '/public/_assets/' : "./_assets/"
        // publicPath: "./"
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                parallel: true,
                cache: './.build_cache/terser',
                exclude: /transpiledLibs/,
                terserOptions: {
                    warnings: false,
                    ie8: false
                }
            }),
            new OptimizeCssAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'all'
        }
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
            },
            {
                test: /\.styl$/,
                // use: extractCSS.extract([ 'style-loader', 'css-loader', 'stylus-loader' ])
                use: [
                    // {
                    //     loader: "style-loader" // creates style nodes from JS strings
                    // },
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "stylus-loader", // compiles Stylus to CSS
                        options: {
                            use: [
                                require('nib')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    'file-loader?name=i/[hash].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './fonts'
                }
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './img'
                }
            }
        ]
    },
    resolve: {
        modules: ["node_modules", "img", "_sources/js/modules"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        })
    ]
};