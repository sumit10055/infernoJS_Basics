const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack_rules = [];

const webpackOption = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "es2015"],
                        plugins: [["babel-plugin-inferno", {"imports": true}]]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['style-loader', 'css-loader']

            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js$/
            })
        ]
    }
};

module.exports = webpackOption;