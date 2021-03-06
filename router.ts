import { Router } from "https://deno.land/x/oak/mod.ts";
import i_RouteController from './Controllers/RouteController.ts'
const RouteController = new i_RouteController();
const router = new Router();

router
    .get('/', (ctx) => {
        ctx.response.body = 'Welcome to notes API';
    })
    .get('/routes', RouteController.getRoutes)
    .get('/routes/:id', RouteController.getRoute)
    .post('/routes', RouteController.createRoute)
    .put('/routes/:id', RouteController.uptadeRoute)
    .delete('/routes/:id', RouteController.deleteRoute) 
export default router



