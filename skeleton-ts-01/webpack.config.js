var path = require("path");
var webpack = require("webpack");

var basePath = __dirname;

module.export = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    
    entry: ['./app/main.jsx'],

    output: {
        path: path.join(basePath, "dist"),
        filename: 'bundle.js'
    }
}