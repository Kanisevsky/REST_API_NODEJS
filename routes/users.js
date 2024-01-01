import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "./controllers/users.js";

const router = express.Router();

const users = [
  { firstName: "John", lastName: "Doe", age: 30 },
  { firstName: "Jane", lastName: "Smith", age: 25 },
  { firstName: "David", lastName: "Murphy", age: 38 },
];

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
