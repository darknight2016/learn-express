// ExpressApp.js
/**
 * Created by yzp 2016.9.19
 */
var express = require('express');
var app = express();
app.set('port',process.env.port||3000);
app.get('/',function(req,res){
	res.type('text/plain');
	res.send('欢迎来到前端达人');
});
app.get('/about',function(req,res){
	res.type('text/plain');
	res.send('关于前端达人');
});
app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('您访问的页面不存在');
});
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.end('服务器内部错误');
});
app.listen(app.get('port'),function(){
	console.log('前端达人服务器已启动');
});

// 后端开发应该了解MVC（模型-视图-控制）的概念，视图与静态资源（图片，css文件）的区别是它不一定是静态的：HTML可以动态构建，为每个请求提供定制的页面。Express支持多种不同的视图引擎，比如jade，ejs，Handlerbars，Jade采用的方式简单，但是对HTML标签进行了高度的抽象，但是大多数前端开发人员都不喜欢标记语言被高度抽象化。