const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "[name].[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            inject: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "assets").replace(/\\/g, "/"),
                    to: path.resolve(__dirname, "dist", "assets"),
                    noErrorOnMissing: true
                }
            ]
        })
    ]
}