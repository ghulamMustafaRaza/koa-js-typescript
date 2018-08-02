import * as Koa from 'koa'
import * as cors from 'kcors'
import * as json from 'koa-json'
import apis from './apis'
// import * as Router from 'koa-router';

import * as koaBunyanLogger from 'koa-bunyan-logger'

export default async function createServer () {
  const app = new Koa()
  //let koaRouter =  new Router();

  // middleware
  app.use(cors())
  app.use(koaBunyanLogger())
  app.use(json())

  let router = apis(app);

  // koaRouter.get('/asd', function(ctx){
  //   console.log('dummy');
  //    return ctx.body = 'Jojie'
  // })
  app.use(router.routes());

  return app
};
