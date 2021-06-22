const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

const jwt = require('jsonwebtoken')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const faker = require('faker')

const adapter = new FileSync(path.join(__dirname, 'db.json'))
const db = low(adapter)

const SECRET_KEY = '2LdoKdZbKlyXpZs5kPic7yk76k0kNNOW'
const expiresIn = '1h'

if(db.has('users').value.length === 0) {
  db.defaults({
    users: [
      {
        id: faker.datatype.uuid(),
        username: 'admin',
        password: 'admin'
      },
      {
        id: faker.datatype.uuid(),
        username: 'guest',
        password:'guest'
      }
    ]
  }).write()
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(jsonServer.rewriter({ '/api': '/' }))
server.use('/api', router)

server.listen(3000, () => {
  console.log('json mock server is running.');
})

server.use(/^(?!\/auth).*$/,(req,res,next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = '授权格式错误'

    res.status(status).json({status,message})

    return
  }

  try {
    const verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = '未提供访问令牌'

      res.status(status).json({ status, message })

      return
    }
    next()
  } catch(err) {
    const status = 401
    const message = 'access_token 被吊销'

    res.status(status).json({ status, message })
  }
})

// 登录
server.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (db.get('users').find({ username, password }).value() === undefined) {
    const status = 401
    const message = '用户名或密码错误'
    res.status(status).json({ status, message })

    return
  }

  const access_token = createToken({ username, password })
  res.status(200).json({ access_token })
})

// 注册
server.post('/auth/register', (req, res) => {
  const { username, password } = req.body;

  if (db.get('users').find({ username, password }).value() !== undefined) {
    const status = 401;
    const message = '用户名已存在';
    res.status(status).json({ status, message });

    return
  }

  db.get('users').push({ id: faker.random.uuid(), username, password }).write()

  const access_token = createToken({ username, password })
  res.status(200).json({ access_token })
})


// 创建 token
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// 验证 token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}
