const express = require("express");
// const db = require("../configure/database");

const logout = express.Router();

logout.post("/", (req, res) => {
    req.session.destroy(() => {
        res.send();
    });
});

module.exports = logout;