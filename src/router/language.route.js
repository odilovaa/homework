const {Router} = require("express");
const { create, getAll } = require("../controller/language.controller");

const router = Router()

router.post("/language", create);
router.get("/language", getAll);

module.exports = router;