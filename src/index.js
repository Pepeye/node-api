const { app } = require('./server')
const PORT = process.env.PORT || 3000
const HOST = process.env.PORT || 'localhost'

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
