// extract app configs
const config = require('./config')
const app = require('./server')

app.listen(config.server.port, config.server.host, () => {
  // debug('Starting server')
  console.log(`Server Started
    =============================
    host : ${config.server.host}
    Port : ${config.server.port}
    -----------------------------
 `)
})
