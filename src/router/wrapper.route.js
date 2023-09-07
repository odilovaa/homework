const {Router} = require("express");
const { create, getAll } = require("../controller/wrapper.controller");

const router = Router()

router.post("/wrapper", create);
router.get("/wrapper", getAll);

module.exports = router;