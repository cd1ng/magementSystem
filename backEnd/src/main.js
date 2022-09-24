const {APP_PORT} = require('./config/config.default')
const app = require('./app')

// 监听
app.listen(APP_PORT, () => {
  console.log(`http://localhost:${APP_PORT}`)
})
