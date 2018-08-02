import * as Router from 'koa-router'

import { UserController } from './user.controller'

export default function (app) {
    let router: Router = new Router({
        prefix: '/api'
    });
    // TODO : Register all controllers here
    const user = new UserController();

    router.get('/user', user.index);
    return router;
}