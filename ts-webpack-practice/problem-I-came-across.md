1. 开始配路由显示不出来，发现忘了加入BrowserRouter
2. 配置routes的时候没有引入 React ，所以一运行项目就报错了
3. react-router添加路由刷新页面后显示404，
 - 原因： 是因为刷新之后history中的数据没有保存
 - 解决方法：
  在webpack.config.js的devServer中设置historyApiFallback: true
  ```js
    devServer:{
        contentBase: './public',
        hot: true,
        historyApiFallback: true,//这里不设置，配置路由就会显示404
    },
  ```
4. 在使用mockjs的时候没有引入就请求
5. 