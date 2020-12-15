const path = require('path');
const express = require('express');
const http = require('http');
const io = require('socket.io')(http);

const app = express();
const port = process.env.PORT || 9001;

app.use(express.static(path.join('./', 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./', 'build', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.createServer(app).listen(port, () => {
  console.log(`Express HTTP server listening on port ${port}`);
});