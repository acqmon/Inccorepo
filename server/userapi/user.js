const express = require("express");
const db = require("../configure/database");

const registeruser = express.Router();

registeruser.post("/", (req, res) => {

    const role = req.body.role;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const contact = req.body.contact;

    const insertdata = "INSERT INTO user (firstname, lastname, contact,role) VALUES (?,?,?,?)";
    db.query(insertdata, [firstname, lastname, contact, role], (error, result) => {
        res.send(result);
    });
});

module.exports = registeruser;