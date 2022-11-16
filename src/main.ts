#!/usr/bin/env node

/**
 * This is a sample HTTP server.
 * Replace this with your implementation.
 */

import 'dotenv/config'
import { Config } from './config.js'
import express from 'express'
const port = Config.port

const app = express()

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  

