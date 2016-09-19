// viewEngin.js
var express = require('express');
var app = express();
var handlebars = require('express3-handlebars')
	.create({defaultLayout:'main'});
// 以上指定默认母版布局，每个页面上可能有一定数量的HTML是相同的，或者非常相近，在每个页面上重复这些代码不仅非常繁琐，还会导致维护上的困境。模板布局就可以解决这个问题
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.port||3000);
app.get('/',function(req,res){
	res.render('home');
});
app.get('/about',function(req,res){
	res.render('about');
});
app.use(function(req,res,next){
	res.status(404);
	res.render('404');
});
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.status(500);
	res.render('500');
});
app.listen(app.get('port'),function(){
	console.log('前端达人网站已启动');
});

// Express依靠中间件处理静态文件和视图。中间件是一个模块化的手段，它使得请求处理更加容易。static中间件可以将一个或多个目录指派为包含静态资源的目录，其中的资源不经过任何处理直接发送客户端。你可以在其中放图片、CSS文件、客户端JavaScript文件之类的资源。

// 在项目的目录下创建名为public的子目录，接下来，你应该把static中间件加在所有路由之前，现在我们可以直接引用public目录下的一个图片，static中间件会返回这个文件。示例代码如下(注意路径中没有public,这个目录对客户端来说是隐形的) 
