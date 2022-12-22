import { getKnex } from "../database/db";
import { updateTypes } from "knex-types";


updateTypes(getKnex(), {
  output: __dirname + "../types.ts",
  exclude: ["migrations", "migrations_lock"]
}).catch((err) => {
  console.error(err);
  process.exit(1);
});