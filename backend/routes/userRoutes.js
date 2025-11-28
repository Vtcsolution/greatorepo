import express from "express";
import { getUsers, getUserById, addUser } from "../controllers/userController.js";

const router = express.Router();

router.route("/") .get(getUsers)     
router.route ("/add") .post(addUser);    
router.route("/:id") .get(getUserById); 

export default router;
