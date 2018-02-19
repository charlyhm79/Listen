
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {

    //entry point : archivo que lee webpack para construir el grafo de dependendcias

    entry: path.join(__dirname , "src", "entry.js"),

    //output: carpeta en la que quiero que webpack me deje elcodigo generado
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname ,'dist')
    },

    // module loaders
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.join(__dirname, 'node_modules')
            }
        ]
    },


    //plugins que estamos utilizando

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname , "src" , "index.html"), 

            minify: {
                collapseWhitespace: true

            }
               
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()

    ],
    // dev server configuration

    devServer: {
        open: true, // abre el navegador por defecto
        port: 3000, // puerto del servidor web
        overlay: true, // muestra los errores en pantalla
        hot: true,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true
    }

};

