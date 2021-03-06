import { Application } from "https://deno.land/x/oak/mod.ts";
import  router  from "./router.ts"

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log("Server is up and running");