
import { Table, Users } from "./types";
import { getKnex } from "./database/db";


export async function insertUser({body}, res) {
    const payload = body
    const result = await getKnex().table<Users>(Table.Users).insert(payload).returning("id")
        .catch(err => {
            return {
                message: err.message
            }
        })
    return res.json(result).end()
}

export async function getUsers(_, res) {
   
    const result = await getKnex().withSchema("public").table<Users>(Table.Users).select("*")
        .catch(err => {
            return {
                message: err.message
            }
        })

    return res.json(result).end()
}

export async function updateUser({params, body}, res) {
    const {id} = params;
    const payload = body;


    const result = await getKnex().table<Users>(Table.Users)
        .update(payload)
        .where("id","=",id)
        .catch(err => {
            return {
                message: err.message
            }
        })

    return res.json(result).end()
}
