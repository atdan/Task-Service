// const koaBody = require('koa-body');
// const Router = require('koa-better-router');
//
// module.exports = () => {
//     let router = Router({prefix: '/api'}).loadMethods();
//
//
//     // Query Tasks
//     router.get('/task', async ctx => {
//         console.log('Retrieving all tasks');
//         ctx.body = [];
//     });
//
//     // Find one Task
//     router.get('/task/:id', async ctx => {
//         const id = ctx.params.id;
//         console.log(`Retrieving task ${id}`);
//         ctx.body = {};
//     });
//
//     // Create Task
//     router.post('/task', koaBody(), async ctx => {
//         const values = ctx.request.body;
//         console.log(`Creating new task with values ${JSON.stringify(values)}`);
//         ctx.body = {};
//     });
//
//     // Update Task
//     router.put('/task/:id', koaBody(), async ctx => {
//         const id = ctx.params.id;
//         const values = ctx.request.body;
//         console.log(`Updating task ${id} with values ${JSON.stringify(values)}`);
//         ctx.status = 200;
//     });
//
//     // Delete Task
//     router.delete('/task/:id', async ctx => {
//         const id = ctx.params.id;
//         console.log(`deleting task ${id}`);
//         ctx.status = 200;
//     });
//
//     return router.middleware();
// };

const koaBody = require('koa-body');
const Router = require('koa-better-router');

const controller = require('./controller');

module.exports = () => {
    let router = Router({prefix: '/api'}).loadMethods();
    router.get('/task/:id', controller.getOneTask);
    router.get('/task', controller.getTasks);
    router.post('/task', koaBody(), controller.createTask);
    router.put('/task/:id', koaBody(), controller.updateTask);
    router.delete('/task/:id', controller.deleteTask);
    return router.middleware();
};
