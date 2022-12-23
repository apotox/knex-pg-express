
import { Table, Users } from "./types";
import { getKnex } from "./database/db";


export async function insertUser({body}, {json}) {
    const payload = body
    const result = await getKnex().table<Users>(Table.Users).insert(payload).returning("id")
        .catch(err => {
            return {
                message: err.message
            }
        })
    return json(result).end()
}

export async function getUsers(_, {json}) {
   
    const result = await getKnex().withSchema("public").table<Users>(Table.Users).select("*")
        .catch(err => {
            console.log('result', err)
            return {
                message: err.message
            }
        })

    return json(result).end()
}

export async function updateUser({params, body}, {json}) {
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

    return json(result).end()
}
