import { Router } from "express";
import { getUsers, insertUser, updateUser } from "./controllers";

export const router = Router()

// routes
router.post('/', insertUser)
router.put('/:id', updateUser)
router.get('/', getUsers)