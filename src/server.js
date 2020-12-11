import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'

import { connect } from './utils/db'
import { port } from './config'
import assetsRouter from './resources/assets/assets.router'

const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/assets', assetsRouter)
app.use((err, _req, res, _next) => {
  res.status(422).send({ error: { message: err.message } })
})

export const startServer = async () => {
  try {
    await connect()
    app.listen(port, () =>
      console.log(`Asset management API on http://localhost:${port}`)
    )
  } catch (err) {
    console.error(err)
  }
}
