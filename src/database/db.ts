import knex, { Knex } from "knex";
import config from '../../knexfile'
import { newDb } from "pg-mem";

const environment = process.env.NODE_ENV || 'test';

let _knex

export function getKnex(): Knex{
    if(environment == 'test'){
        return global.__db_knex
    }
    if(!_knex){
        _knex = knex(config[environment]);
    }
    return _knex;
}
