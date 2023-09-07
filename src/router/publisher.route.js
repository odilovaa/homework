const {Router} = require("express");
const { create, getAll } = require("../controller/publisher.controller");

const router = Router()

router.post("/publisher", create);
router.get("/publisher", getAll);

module.exports = router;