import knex, { Knex } from "knex";
import { beforeAll, afterAll } from "vitest";
import { newDb } from "pg-mem";
import fs from "fs"


async function loadMigrations(){
    const listFiles = fs.readdirSync(__dirname + "/../../../migrations").filter(fileName => fileName.endsWith(".js"));
    for(let fileName of listFiles){
      const {up} = await import(__dirname + "/../../../migrations/"+fileName);
      await up(global.__db_knex)
    };
}

beforeAll(async () => {
  
  const _db = newDb()
  global.__db_knex = _db.adapters.createKnex() as Knex;

  await loadMigrations();

});

afterAll(async () => {
  global.__db_knex.destroy()
});