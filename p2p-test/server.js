const express = require('express')
const next = require('next')
const { ExpressPeerServer } = require('peer');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var count=0;

app.prepare().then(() => {
  const server = express()
  //pjs
  const http = require('http');
   
  const pServer = http.createServer(server);
  const peerServer = ExpressPeerServer(pServer, {
    debug: true,
    path: '/myapp'
  });
   
  server.use('/peerjs', peerServer);
   
  pServer.listen(9000);

  
  //pjs

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/b', (req, res) => {
    count +=1;
    console.log(count);
    return res.send('Welcome to our page!');
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

})