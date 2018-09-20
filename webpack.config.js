// var path = require("path");
var webpack = require("webpack");
var combineLoaders = require("webpack-combine-loaders");
// var CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebappWebpackPlugin = require("webapp-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

const NODE_ENV = process.env.NODE_ENV || "development";
const DEV_MODE = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 6090;

const FAVICON_DIR = "./src/images/maleta.png";


module.exports = {
    entry: ["./src/index.tsx"],
    // mode: DEV_MODE ? "development" : "production",
    devtool: DEV_MODE ? "source-map" : "",
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    },
    module: {
        loaders: [{
                test: /\.tsx?$/,
                loader: "babel-loader?presets[]=es2015,plugins[]=transform-runtime!awesome-typescript-loader"
            },
            // {
            //     test: /\.jsx?$/,
            //     loader: "babel-loader?presets[]=es2015,plugins[]=transform-runtime"
            // },
            {
                test: /\.css/,
                loader: combineLoaders([{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: false,
                            importLoaders: 1,
                            localIdentName: "[local]"
                        }
                    }
                ])
            },
            {
                test: /\.scss$/,
                loader: combineLoaders([{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "sass-loader",
                        query: {
                            includePaths: [
                                "./src"
                            ]
                        }
                    }
                ])
            },
            {
                test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                loader: "url-loader?mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9].[0-9].[0-9])?$/,
                loader: "file-loader?name=[name].[ext]"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    // 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.[hash].js",
    },
    devServer: {
        contentBase: "./dist",
        compress: true,
        port: PORT,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
            "process.env.PORT": JSON.stringify(PORT),
        }),
        /*
            Copy files from src to dist
        */
        // new CopyWebpackPlugin([
        //     { from: "src/file.type" }
        // ]),
        /*
            END
        */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        ...(FAVICON_DIR ? [new WebappWebpackPlugin(FAVICON_DIR)] : []),
        new ImageminPlugin({
            disable: DEV_MODE,
            pngquant: {
                quality: "95-100",
            },
            test: /\.(jpe?g|png|gif|svg)$/i,
        }),
    ]
}