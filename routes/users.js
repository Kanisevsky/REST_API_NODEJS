import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [
  { firstName: "John", lastName: "Doe", age: 30 },
  { firstName: "Jane", lastName: "Smith", age: 25 },
  { firstName: "David", lastName: "Murphy", age: 38 },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(`Users with the username ${user.firstName} added to the database!`);
});

router.get("/:id", (req, res) => {
  res.send("The get ID route");
});

export default router;
