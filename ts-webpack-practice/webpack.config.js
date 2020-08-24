const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    mode: 'development',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    entry: './src/index.js',
    resolve:{
        extensions:['.tsx','.ts','.js','.jsx'],
        alias:{
            '@': path.resolve(__dirname,'./src'),   //路径别名，方便引入模块
        }
    },
    devServer:{
        contentBase: './public',
        hot: true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                use:['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.styl(us)?$/,
                use:['style-loader','css-loader','stylus-loader'],
            },
            {
                test: /\.tsx?$/,
                use:['babel-loader','ts-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}

module.exports = config;