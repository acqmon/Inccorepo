const express = require("express");
const db = require("../configure/database");

const registermarketer = express.Router();

registermarketer.post("/", (req, res) => {

    const role = req.body.role;
    const firmname = req.body.firmname;
    const location = req.body.location;
    const pincode = req.body.pincode;
    const industry = req.body.industry;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const contact = req.body.contact;

    const insertdata = "INSERT INTO marketer (firmname, location, pincode, industry, firstname, lastname, contact,role) VALUES (?,?,?,?,?,?,?,?)";
    db.query(insertdata, [firmname, location, pincode, industry, firstname, lastname, contact, role], (error, result) => {
        res.send(result);
    });
});

module.exports = registermarketer;