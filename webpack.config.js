const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common")

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        open: true,
        port: 3000
    }
});














/*
// Импортируем модуль плагина в нашу конфигурацию.
var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                // Для всех файлов HTML
                test: /\.html$/,
                use: [
                    {
                        // Воспользуемся загрузчиком html-loader
                        loader: "html-loader",
                        // Который заодно проминимизирует наш HTML
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [
        // Скопируем наш index.html в папку dist
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./public/index.html"
        })
    ]
};
*/
