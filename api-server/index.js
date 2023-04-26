const express = require("express");
const users = require("./users");
const uniqGenerators = require("./uniq-generators");
const api = express();

api.use(express.json())
.use(express.urlencoded())
.listen(80, () => {
    console.log("LanceVPN API Server was started in " + new Date());
});

api.get("/lancevpn/user/:luserId", async (req, res) => {
    var user = await users.getUser(req.params.luserId);
    res.json(user);
});

api.post("/lancevpn/createUser/:mail", async (req, res) => {
})
