const express = require("express");
const db = require("../configure/database");
const bcrypt = require("bcrypt");

const loginadmin = express.Router();

loginadmin.post("/", (req, res) => {
    const adminid = req.body.adminid;
    const password = req.body.password;

    const insertlogin = "SELECT * FROM admin WHERE adminid = ?";
    db.query(insertlogin, adminid, (error, result) => {
        if (error) {
            console.log(error);
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    req.session.user = result;
                    console.log(req.session.user);
                    res.send(result);
                } else {
                    res.send({ messege: "invalid credentials" });
                }
            });
        } else {
            res.send({ messege: "user dont exist" });
        }
    });
});

loginadmin.get("/", (req, res) => {
    if (req.session.user) {
        res.send({ loggedin: true, user: req.session.user });
    } else {
        res.send({ loggedin: false });
    }
});

module.exports = loginadmin;