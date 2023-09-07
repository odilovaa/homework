const {Router} = require("express");
const { create, getAll } = require("../controller/author.controller");

const router = Router()

router.post("/author", create);
router.get("/author", getAll);

module.exports = router;
