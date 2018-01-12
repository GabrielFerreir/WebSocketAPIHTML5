var server = require('ws').Server;
var s = new server({port: 5001});

s.on('connection', (ws) => {

  console.log('Conectado')
  ws.on('message', (message) => {
    console.log("User: " + message);

    s.clients.forEach(function e (client) {
      client.send(message);
    })

    if(message == 'oi') {
      ws.send('Oi, tudo bem?');
    }
  })

  console.log("One omore client connected");
})
