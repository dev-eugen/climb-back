import db from '../db.ts';

function createRoutes(route) {
    let routes =  db.insert(route)  
    return routes
}

function getRoutes() {
    let routes =  db.find({});
    return routes
}

function getRouteById(id) {
    let route = db.findOne({ _id: id }) 
    return route
}

function deleteRouteById(id) { 
    let route = db.remove({ _id: id }) 
    return route
}

function updateRouteById(id, route) {
    console.log(route)
    return db.update({ _id: id }, { $set: { 
        name: String(route.name), 
        uptated_date: new Date()
    }})  
}

export  {
    getRoutes,
    createRoutes,
    getRouteById,
    updateRouteById,
    deleteRouteById
}