const express = require("express");
const users = require("./users");
const api = express();

api.listen(80, () => {
    console.log("LanceVPN API Server was started in " + new Date());
});

api.get("/lancevpn/users", (req, res) => {
    users.getUsers();
    res.json({result: "ok", message: "Hello, World!", users: [{name: "Kirill", age: "17"}, {name: "Stepan", age: "16"}]});
});
