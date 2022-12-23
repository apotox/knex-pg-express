import { Knex } from "knex";

declare global {
    var __db_knex: Knex;
}