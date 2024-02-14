import express from "express";

import userController from "../../controllers/users";

const router = express.Router();

router.post("/create-user", userController.createUser);

export default router;