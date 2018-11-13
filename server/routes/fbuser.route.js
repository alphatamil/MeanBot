const express = require("express");
const fbuserCtrl = require("../controllers/fbuser.controller");

const router = express.Router();

router.get("/", fbuserCtrl.getUsers);
router.get("/:id", fbuserCtrl.getUser);
router.put("/:id", fbuserCtrl.editUser);
router.delete("/:id", fbuserCtrl.deleteUser);

module.exports = router;
