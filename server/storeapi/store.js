const express = require("express");
const db = require("../configure/database");

const registerstore = express.Router();

registerstore.post("/", (req, res) => {

    const role = req.body.role;
    const storename = req.body.storename;
    const location = req.body.location;
    const pincode = req.body.pincode;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const contact = req.body.contact;

    const insertdata = "INSERT INTO store (storename, location, pincode, firstname, lastname, contact,role) VALUES (?,?,?,?,?,?,?)";
    db.query(insertdata, [storename, location, pincode, firstname, lastname, contact, role], (error, result) => {
        res.send(result);
    });
});

module.exports = registerstore;