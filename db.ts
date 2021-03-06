import Datastore from 'https://deno.land/x/dndb@0.3.1/mod.ts'
const db = new Datastore({ filename:"./database/database.db", autoload: true })
//const db_routes = new Datastore({ filename:"./database/database.db", autoload: true })

export default db
     
