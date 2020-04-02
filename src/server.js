const Koa = require('koa');
const app = new Koa();

// Start the server
const server = app.listen(8080, () => {
    console.log(`Listening on 8080`);
});
