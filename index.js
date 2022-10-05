const server = require('./server');
const config = require('./src/config');

server.app.listen(config.PORT, () => {
  //eslint-disable-next-line no-console
  console.info('Server is running at port', config.PORT);
});
