const express = require("express");
const db = require("../configure/database");

const rendersalespromotionplans = express.Router();

rendersalespromotionplans.get("/", (req, res) => {
    const getdata = "select * from promotionandsales where type = 'salespromotion'";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = rendersalespromotionplans;