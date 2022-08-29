const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        static: "./dist",
        port: 3000
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});