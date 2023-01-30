const express = require("express");
const db = require("../configure/database");

const getpromotionorderdata = express.Router();

getpromotionorderdata.post("/", (req, res) => {
    const userid = req.body.userid;
    const getdata = "select * from promotionandsalescalculate where type = 'promotion' and orderamount > 0 and userid = ?";
    db.query(getdata, userid, (error, result) => {
        res.send(result);
    });
});

module.exports = getpromotionorderdata;