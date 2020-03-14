require('dotenv').config({path: __dirname + '/.env'});
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors'
import * as core from "express-serve-static-core";

const MONGO_URL: string = process.env.MONGO_URL as string
const port: string = process.env.PORT as string
const app: core.Express = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err: Error) => {
    if (err) {
      return console.log(err)
    }
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`)
    })
  })
