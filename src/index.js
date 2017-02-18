const app = require('./server')
const debug = require('debug')('stormtrooper:server')

const PORT = 3000
const HOST = 'localhost'

// console.dir(debug, { colors: true, depth: 2 })
app.listen(PORT, HOST, () => {
  debug('Starting server')
  console.log(`
    Server Started
    =============================
    host : ${HOST}
    Port : ${PORT}
    -----------------------------
 `)
})
