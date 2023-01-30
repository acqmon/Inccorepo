const express = require("express");
const db = require("../configure/database");

const renderpromotionplans = express.Router();

renderpromotionplans.get("/", (req, res) => {
    const getdata = "select * from promotionandsales where type = 'promotion'";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = renderpromotionplans;