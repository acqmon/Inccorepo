const express = require("express");
const db = require("../configure/database");

const renderpromotionandsalehistory = express.Router();

renderpromotionandsalehistory.get("/", (req, res) => {
    const getdata = "select * from promotionandsalesorderhistory order by id desc";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

renderpromotionandsalehistory.post("/", (req, res) => {
    const userid = req.body.userid
    const getdata = "select * from promotionandsalesorderhistory where userid = ? order by id desc";
    db.query(getdata, userid,(error, result) => {
        res.send(result);
    });
});

module.exports = renderpromotionandsalehistory;