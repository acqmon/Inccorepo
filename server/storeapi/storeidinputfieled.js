const express = require("express");
const db = require("../configure/database");

const storeidinputfield = express.Router();

storeidinputfield.post("/", (req, res) => {
    const firstname = req.body.firstname;
    const contact = req.body.contact;

    const getid = "select * from store where firstname = ? and contact = ?";
    db.query(getid, [firstname, contact], (error, result) => {
        res.send(result);
    });
});

module.exports = storeidinputfield;