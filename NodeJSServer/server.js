var WebSocket = require('ws'); var port = 3000; var server = new WebSocket.Server(
    {
      port: port,
    }
  );
    server.on('connection', function connection(client) {
     let msg="Hello server!";
     client.send(msg);
    client.on('message', function incoming(message) {
      msg = message;
      let mess=msg.toString();
      for(var cl of server.clients) {
  cl.send(mess);
      }
      console.log("Received the following message:\n" + message);
    });
  });