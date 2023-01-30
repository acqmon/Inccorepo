const express = require("express");
const db = require("../configure/database");

const userpurchaseplan = express.Router();

userpurchaseplan.get("/", (req, res) => {
    const getdata = "select * from usertopup";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = userpurchaseplan;