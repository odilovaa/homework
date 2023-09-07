const {Router} = require("express");
const { create, update, remove, getbyid, getAll } = require("../controller/book.controller");

const router = Router()

router.post("/book", create);
router.put("/book/:id", update);
router.delete("/book/:id", remove);
router.get("/book/:id", getbyid);
router.get("/book", getAll);

module.exports = router;