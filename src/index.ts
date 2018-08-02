import createServer from './server'
import { config } from './config'

createServer().then(app => {
  app.listen(config.port, () => {
    console.log(`App started port @ ${config.port}`)
  })
}, err => {
  console.log(err)
})
