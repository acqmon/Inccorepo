const express = require("express");
const db = require("../configure/database");

const adminid = express.Router();

adminid.put("/", (req, res) => {
    const updateuser = "update admin set adminid = concat(id,firstname)";
    db.query(updateuser, (error, result) => {
        res.send(result);
    });
});

module.exports = adminid;