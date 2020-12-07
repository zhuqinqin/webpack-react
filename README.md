# webpack-react
使用 Webpack 对 React 做开发的最基础配置

##开发工具版本说明
* `webpack ^5.10.0`
* `yarn 1.21.1`
* `node 12.13.1`
* `npm 6.9.0`
* `react ^17.0.1`


## yarn && npm compare
* npm	yarn
* npm install	yarn
* npm install react --save	yarn add react
* npm uninstall react --save	yarn remove react
* npm install react --save-dev	yarn add react --dev
* npm update --save	yarn upgrade

* 安装所有依赖项：yarn或yarn install
* 安装一个且只有一个版本的软件包： yarn install --flat
* 强制重新下载所有软件包： yarn install --force
* 只安装生产依赖关系： yarn install --production

## 配置流程
1. `git clone` 项目
2. 执行`yarn init`初始化`package.json`
3. `yarn add react react-dom`
4. `yarn add webpack webpack-cli -D`
5. `yarn add babel babel-loader @babel/core @babel/preset-env -D`
6. `yarn add @babel/preset-react -D`
 >  - 可选`# ES2015转码规则 $ npm install --save-dev babel-preset-es2015`
    - ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
    - $ npm install --save-dev babel-preset-stage-0
    - $ npm install --save-dev babel-preset-stage-1
    - $ npm install --save-dev babel-preset-stage-2
    - $ npm install --save-dev babel-preset-stage-3

    使用babel插件transform-object-rest-spread,作用：对象使用spread操作符
    - https://link.jianshu.com/?t=http://babeljs.io/docs/plugins/transform-object-rest-spread/
    - yarn add babel-plugin-transform-object-rest-spread -D
7. 在项目文件夹下配置`webpack.config.js`文件，并在配置文件中添加对JSX语法的Babel编译支持
8. 设置 entry js
9. `yarn add html-webpack-plugin -D`
  > - 执行打包命令`npx webpack --mode development`
10. 设置react项目的本地服务
  > - `yarn add webpack-dev-server -D` 
      - webpack 5 与 webpack-dev-server 3兼容性问题
        - 使用 webpack serve --open 命令启动
  
## 项目目录结构说明
![描述] (图片链接地址)
---
----
'***'
'*****'
(`行内代码块`)
        四个缩进空格，表示代码块
[toc]


