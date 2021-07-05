const { Router } = require("express");
const { signIn } = require("../controller/users");

const route = Router();

route.post("/signin", signIn);

module.exports = route;
