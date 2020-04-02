const Koa = require('koa');
const routes = require('./lib/routes');
const app = new Koa();

// Load the routes
app.use(routes());

// Start the server
const server = app.listen(8080, () => {
    console.log(`Listening on 8080`);
});
