var express = require('express');
var app = express();
var port = 3000;

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const message = [];
const username = [];

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  // Pass to next layer of middleware
  next();
});

// test
app.get('/', function (req, res, next) {
  res.json({ message: 'api funktioniert' });
});

// history
app.get('/history', function (req, res, next) {
  res.send(message);
});

app.post('/history', function (req, res, next) {
  const chatMessage = req.body?.content?.toString();
  const username = req.body?.username?.toString();
  const timestamp = req.body?.timestamp?.toString();

  if (!chatMessage) {
    res.status(400).send('Message is missing.');
    return;
  }

  if (!username) {
    res.status(400).send('username is missing.');
    return;
  }

  const date = new Date();
  const message_object = {
    content: chatMessage,
    username: username,
    timestamp: timestamp
  };

  message.push(message_object);

  res.json(message);
});

// username
app.get('/username', function (req, res, next) {
  res.send(username);
});

app.get('/username/:id', function (req, res, next) {
  // simple for loop
  //   for (var i = 0; username.length > 0; i++) {
  //     var username = username[i]

  //     if (username && username.id === req.params.id) {
  //       res.send({ username: username.username, id: username.id })
  //     }
  // }

  //   foreach in array
  //   username.forEach((username) => {
  //     if (username && username.id === req.params.id) {
  //       res.send({ username: username.username, id: username.id })
  //     }
  //   })

  // build-in .find function
  const id = +req.params.id;
  const username = username.find((e) => e.id === id);

  if (!username) {
    res.status(404).send('username not found.');
    return;
  }

  res.send(username);
});

app.post('/username', function (req, res, next) {
  const userName = req.body?.username?.toString();

  if (!userName) {
    res.status(400).send('username is missing.');
    return;
  }

  if (!isusernameUnique(userName)) {
    res.status(409).send(`username ${userName} already exists.`);
    return;
  }

  const date = new Date();
  const username = {
    id: username.length + 1,
    username: userName,
    createdAt: date,
  };

  username.push(username);

  res.json(username);
});

app.delete('/username/:id', function (req, res, next) {
  const id = +req.params.id;
  const username = username.find((e) => e.id === id);

  if (!username) {
    res.status(404).send('username not found.');
    return;
  }

  const index = username.findIndex((e) => e.id === id);

  if (index < 0) {
    res.status(404).send('username id not found.');
    return;
  }

  username.splice(index, 1);

  res.send('username deleted.');
});

function isusernameUnique(username) {
  return !username?.some((e) => e.userName === username);
}

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
