var server = require('ws').Server;
var s = new server({port: 5001});


s.on('connection', (ws) => {
  console.log('Conectado');
  ws.on('message', (message) => {
      s.clients.forEach(function e (client) {
        client.send(message);
      })
  })

  console.log("One omore client connected");
})
