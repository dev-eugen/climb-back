import { Router } from "https://deno.land/x/oak/mod.ts";
import i_RouteController from './Controllers/RouteController.ts'
const RouteController = new i_RouteController();
const router = new Router();

router
    .get('/', (ctx) => {
        ctx.response.body = 'Welcome to notes API';
    })
    .get('/notes', RouteController.getRoutes)
    .get('/notes/:id', RouteController.getRoute)
    .post('/notes', RouteController.createRoute)
    .put('/notes/:id', RouteController.uptadeRoute)
    .delete('/notes/:id', RouteController.deleteRoute) 
export default router



