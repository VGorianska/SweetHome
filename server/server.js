import express from 'express';
import { dirname } from './lib/pathHelpers.js';
import path from 'path';

let subscribers = [];
const __dirname = dirname(import.meta.url);

const server = express();

server.use(express.json());

// new client wants messages
server.get('/api/subscribe', (req, res) => onSubscribe(req, res));

// sending a message
server.post('/api/publish', (req, res) => {
  publish(req.body.message); // publish it to everyone
  res.send('ok');
});

server.use(express.static(path.join(__dirname, '../client/dist')));

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const port = process.env.PORT || 4000;

const serverInstance = server.listen(port, () =>
  console.log(`Chat relay server started on port ${port}`)
);

function onSubscribe(req, res) {
  let id = Math.random();

  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, must-revalidate');

  subscribers[id] = res;

  req.on('close', function () {
    delete subscribers[id];
  });
}

function publish(message) {
  for (let id in subscribers) {
    let res = subscribers[id];
    res.end(message);
  }

  subscribers = [];
}

// delete subscriber when server shuts down
function closeSubscribers() {
  for (let id in subscribers) {
    let res = subscribers[id];
    res.status(503).end('Server went down for yearly checkup');
  }
}

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  closeSubscribers();
  serverInstance.close(() => console.log('Closed express server'));
  process.exit();
});