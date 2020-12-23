/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const members = require('./members');
const messages = require('./messages');

const app = express();
const port = process.env.PORT || 9001;
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join('./', 'build')));
app.use(cors());

app.get('/ping', (req, res) => res.send('pong'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./', 'build', 'index.html'));
});

io.on('connection', socket => {
  console.log('socket.io client connected!');

  socket.on('validate_username', ({ username }, callback) => {
    const response = members.checkAvailableUsername(username);
    const { error } = response;

    if (error) {
      console.log('Invalid username: ', error);
      return callback(response);
    }

    console.log('Valid username:', username);
    return callback(response);
  });

  socket.on('join', ({ username }, callback) => {
    const response = members.addMember(username, socket.id);
    const { error } = response;

    console.log('Chat members:', members.getChatMembers());

    if (error) {
      console.log('Connection error :', error);
      return callback(response);
    }

    console.log('User connected:', username);
    return callback(response);
  });

  socket.on('leave', ({ username }, callback) => {
    const response = members.removeMember(username, socket.id);
    const { error } = response;

    if (error) {
      console.log('Disconnection error :', error);
      return callback(response);
    }

    console.log('User disconnected:', username);
    console.log('Chat members:', members.getChatMembers());
    return callback(response);
  });

  socket.on('chat_message', ({ message, username }, callback) => {
    const response = members.findMemberByUsername(username);
    const { error, result: user } = response;

    if (error) {
      console.log('Chat message error :', error);
      return callback(response);
    }

    const newMessage = messages.formatNewMessage(user, message);
    console.log('New Message:', newMessage);

    io.emit('chat_message', newMessage);
    callback(newMessage);
  });
});

server.listen(port, () => {
  console.log(`Express HTTP server listening on port ${port}`);
});