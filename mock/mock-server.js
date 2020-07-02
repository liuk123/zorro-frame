const jsonServer = require('json-server');
const routeHandler = require('./route.json');
const db = require('./db.json');

const server = jsonServer.create();
const middlewares = jsonServer.defaults({
    logger:true,
    bodyParser:true,
    readOnly:false,
});
const router = jsonServer.router(db);

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    next()
})
router.render = (req, res) => {
    res.jsonp({
      body: res.locals.data
    })
  }
// 路由格式处理。需要加在 server.use(router) 前
server.use(jsonServer.rewriter(routeHandler));
server.use(router);


server.listen(3001, () => {
    console.log('JSON Server is running at 3001');
});