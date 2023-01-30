const express = require("express");
const db = require("../configure/database");

const registeradmin = express.Router();

registeradmin.post("/", (req, res) => {

    const role = req.body;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const contact = req.body.contact;

    const insertdata = "INSERT INTO admin (firstname, lastname, contact, role) VALUES (?,?,?,'manager')";
    db.query(insertdata, [firstname, lastname, contact, role], (error, result) => {
        res.send(result);
    });
});

registeradmin.get("/", (req, res) => {
    const insertdata = "select * from admin where role = 'admin'";
    db.query(insertdata, (error, result) => {
        res.send(result);
    });
});

module.exports = registeradmin;