const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 *  __dirname      node全局变量  存储的是文件所在的文件目录
 *  __filename     node全局变量  存储的是文件名
 *  path.resolve   将一个字符串解析到一个绝对路径里。
 *  resolve - extensions 定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
 *  entry          指定打包的入口文件，每有一个键值对，就是一个入口文件 output：配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称
 *  module - ruler 定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理
*/

//常用路径
const ROOT_PATH = path.resolve(__dirname); //获取当前文件路径
const APP_PATH = path.resolve(ROOT_PATH, 'entry') //获取文件入口脚本的路径
const BUILD_PATH = path.resolve(ROOT_PATH, 'build') //获取打包文件的输入位置

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './src/'),
    publicPath: '/',
    host: '127.0.0.1',
    port: 3000,
    stats: {
      colors: true
    }
  },
  entry: './src/index.js',
  output: {
    path: BUILD_PATH,
    filename: 'js/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // jsx/js文件的正则
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        // 处理图片资源,但是处理不了html中img的路径问题
        test: /\.(jpg|png|gif)$/,
        loader:'url-loader',
        options:{
            limit: 8* 1024,
            // 关闭es6
            esModule:false,
            name:'[name].[hash:16].[ext]', // 文件名.hash.文件扩展名 默认格式为[hash].[ext]，没有文件名
            outputPath: "assets/image", // 为你的文件配置自定义 output 输出目录 ; 用来处理图片路径问题
            publicPath: "assets/image" // 为你的文件配置自定义 public 发布目录 ; 用来处理图片路径问题
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
}