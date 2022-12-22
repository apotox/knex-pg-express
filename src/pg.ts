import knex from "knex";
import config from '../knexfile'


export const pg = knex(config.development);


