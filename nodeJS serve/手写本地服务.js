// 手写搭建一个简单serve服务  基于nodeJS上搭建的
const http = require('http');
const serve = http.createServer((req, res) => {
    console.log('111');
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Madified-Since,Cache-Control,Authorization,Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE,X-URL-PATH,x-access-token"
    })
    res.end('hello word')
})
serve.listen(3000);


// 使用express开发框架开发serve服务， 同时添加中间件
const express = require('express'); // 引入
const app = express();  // 实例化
var router = express.Router();  // 产生Router的实例对象
// 路由级中间件的工作方式与应用级中间件相同
router.use(yourMiddleware);
router.get('/user/:id', yourMiddleware);  
// 路由router级别上的中间件，可以作为app级别的中间件，从而减少app级别路径处理的臃肿，提高可维护性和扩展性。
app.listen(3000);  // 监听