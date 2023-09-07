const {Router} = require("express");
const { create, getAll } = require("../controller/genre.controller");

const router = Router()

router.post("/genre", create);
router.get("/genre", getAll);

module.exports = router;