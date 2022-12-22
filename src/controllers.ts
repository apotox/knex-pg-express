
import { Table, Users } from "./types";
import { getKnex } from "./database/db";
import { Router } from "express";

export const router = Router()

async function insertUser(req, res) {
    const payload = req.body
    const result = await getKnex().table<Users>(Table.Users).insert(payload).returning("id")
        .catch(err => {
            return {
                message: err.message
            }
        })
    return res.json(result).end()
}

async function getUsers(req, res) {
    const result = await getKnex().table<Users>(Table.Users).select("*")
        .catch(err => {
            return {
                message: err.message
            }
        })

    return res.json(result).end()
}

async function updateUser(req, res) {
    const {id} = req.params;
    const payload = req.body;

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

// routes
router.post('/', insertUser)
router.put('/:id', updateUser)
router.get('/', getUsers)