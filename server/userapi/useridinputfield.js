const express = require("express");
const db = require("../configure/database");

const useridinputfield = express.Router();

useridinputfield.post("/", (req, res) => {
    const firstname = req.body.firstname;
    const contact = req.body.contact;

    const getid = "select * from user where firstname = ? and contact = ?";
    db.query(getid, [firstname, contact], (error, result) => {
        res.send(result);
    });
});

module.exports = useridinputfield;