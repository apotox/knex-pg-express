import knex, { Knex } from "knex";
import config from '../../knexfile'

let _knex

export function getKnex(env = "development"): Knex{
    if(!_knex){
        _knex = knex(config[env]);
    }
    return _knex;
}
