const express = require("express");
const db = require("../configure/database");

const rederpromotionandsalehistorymanager = express.Router();

rederpromotionandsalehistorymanager.post("/", (req, res) => {
    const managerid = req.body.managerid
    const getdata = "select * from promotionandsalesorderhistory where managerid = ? order by id desc";
    db.query(getdata, managerid,(error, result) => {
        res.send(result);
    });
});

module.exports = rederpromotionandsalehistorymanager;