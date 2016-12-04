import server from './server';
import http from 'http';
import socketServer from './server/socket-server';

var config = {};
var port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development ') {
  config.port = port;
  config.host = 'localhost';
  server.locals.assetPath = 'http://localhost:8080/';
  server.locals.isDevelopment = true;

  const webServer = server.listen(config.port, config.host, err => {
    if (err) throw err;
    console.log('Web server listening at http://%s:%d', config.host, config.port);
  });

  socketServer(webServer);
}
else{
    server.set('port', port);
    var s = http.createServer(server);
    const webServer = s.listen(port);

    socketServer(webServer);
}
