import path from 'path'
import fs from 'fs'
import request from 'request'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

const PORT = 8022
const app = express()

const router = express.Router()

app.use('/:id', (req, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }

    const CONTACT_URL = `https://my-json-server.typicode.com/dujuanxian/contacts-api/css/${req.params.id}`;
    request(CONTACT_URL, function (error, response, body) {
      const style = JSON.parse(body).result;
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(<App style={style}/>)}</div>`
        )
      )
    });
  })
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(router)

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
