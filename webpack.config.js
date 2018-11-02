//entry point -> where to output
// console.log(__dirname);
////run in cl to get the path of __dirname
//node webpack.config.js 

const path = require("path");
// console.log(path.join(__dirname, "public"));
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {

	const isProduction = env === "production";
	const CSSExtract = new ExtractTextPlugin("styles.css")

	return {
		entry: "./src/app.js",
		output: {
			path: path.join(__dirname, "public"),
			filename: "bundle.js"
		},
		module: {
			rules: [{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: CSSExtract.extract({
					use:[
						{
							loader:	"css-loader",
							options: {
								sourceMap: true
							}
						},
						{
							loader: "sass-loader",
							options: {
								sourceMap: true
							}
						}
					]
				})
			}]
		},
		plugins: [
			CSSExtract
		],
		devtool: isProduction ? "source-map" : "inline-source-map",
		devServer: {
			contentBase: path.join(__dirname, "public"),
			historyApiFallback: true
		}
	}
}


// module.exports = {
// 	entry: "./src/app.js",
// 	output: {
// 		path: path.join(__dirname, "public"),
// 		filename: "bundle.js"
// 	},
// 	module: {
// 		rules: [{
// 			loader: "babel-loader",
// 			test: /\.js$/,
// 			exclude: /node_modules/
// 		}, {
// 			test: /\.s?css$/,
// 			use: [
// 				"style-loader",
// 				"css-loader",
// 				"sass-loader"
// 			]
// 		}]
// 	},
// 	devtool: "cheap-module-eval-source-map",
// 	devServer: {
// 		contentBase: path.join(__dirname, "public"),
// 		historyApiFallback: true
// 	}
// };

// //loader

