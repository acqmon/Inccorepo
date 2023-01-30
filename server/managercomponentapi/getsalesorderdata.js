const express = require("express");
const db = require("../configure/database");

const getsalesorderdata = express.Router();

getsalesorderdata.post("/", (req, res) => {
    const userid = req.body.userid;
    const getdata = "select * from promotionandsalescalculate where type = 'salespromotion' and orderamount >= orderperphase and userid = ?";
    db.query(getdata, userid, (error, result) => {
        res.send(result);
    });
});

module.exports = getsalesorderdata;