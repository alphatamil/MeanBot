const express = require("express");
const userCtrl = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userCtrl.getUsers);
router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.getUser);
router.put("/:id", userCtrl.editUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
