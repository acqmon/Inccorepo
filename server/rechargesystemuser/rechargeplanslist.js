const express = require("express");
const db = require("../configure/database");

const userrechargelist = express.Router();

userrechargelist.get("/", (req, res) => {
    const getuserrechargeplanlist = "select * from usertopup";
    db.query(getuserrechargeplanlist, (error, result) => {
        res.send(result);
    });
});

module.exports = userrechargelist;