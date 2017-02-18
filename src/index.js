const { app } = require('./server')

const PORT = 3000
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
  // debug('Starting server')
  console.log(`
    Server Started
    =============================
    host : ${HOST}
    Port : ${PORT}
    -----------------------------
 `)
})
