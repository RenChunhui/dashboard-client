const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = require('./middlewares');
const router = jsonServer.router(path.join(__dirname,'db.json'));

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(router);

server.listen(3000,() => {
  console.log('json server is running.')
})

server.get('/echo',(req,res) => {
  res.jsonp(req.query)
})
