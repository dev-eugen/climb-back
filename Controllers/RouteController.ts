import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import Route from '../Models/RouteModel.ts';
import { getRoutes, createRoutes, getRouteById, updateRouteById, deleteRouteById } from "../Service/serviceRoutes.js"; 

export default class RouteController {

    async createRoute(ctx: RouterContext) {
        const body = await  ctx.request.body().value
        
        const route: Route = {
            name: String( await body.name),
            created_date: new Date(),
            uptated_date: new Date()
        } 
        let res: any =  await createRoutes(route) 
        ctx.response.body = res
        ctx.response.status = 200 
    }

    async getRoutes(ctx: RouterContext){ 
        ctx.response.body = await getRoutes()
        ctx.response.status = 200
    }

    async getRoute(ctx: RouterContext){ 
        let id: any =  ctx.params.id
        let res: any = await getRouteById(id)
        ctx.response.body = res
        ctx.response.status = 200
    }

    async uptadeRoute(ctx: RouterContext){ 
        let id: any =  ctx.params.id
        const route = await  ctx.request.body().value 
        let res: any = await updateRouteById(id, route)
        ctx.response.body = res
        ctx.response.status = 200
    }

    async deleteRoute(ctx: RouterContext){ 
        let id: any =  ctx.params.id 
        let res: any = await deleteRouteById(id)
        ctx.response.body = res
        ctx.response.status = 200
    }
}

        