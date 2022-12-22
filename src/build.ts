import { pg } from "./pg";


pg.schema.withSchema("public").createTable("users", tableBuilder=>{


    tableBuilder.text("username", "bigint")

})