const express = require("express");
const db = require("../configure/database");

const getpromotiondetails = express.Router();

getpromotiondetails.get("/", (req, res) => {

    const getdata = "select * from promotionandsalescalculate where orderamount > 0 order by date asc";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

module.exports = getpromotiondetails;