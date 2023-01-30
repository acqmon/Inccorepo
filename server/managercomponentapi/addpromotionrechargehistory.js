const express = require("express");
const db = require("../configure/database");

const addpromotionrechargehistory = express.Router();

addpromotionrechargehistory.post("/", (req, res) => {
    const rechargeamount = req.body.rechargeamount;
    const orderamount = req.body.orderamount;
    const cut = req.body.cut;
    const userid = req.body.userid;
    const managerid = req.body.managerid;

    const getdata = "insert into promotionandsalesrechargehistory (type, rechargeamount, orderamount, cut, userid, managerid) values ('promotion',?,?,?,?,?)";
    db.query(getdata, [rechargeamount, orderamount, cut, userid, managerid], (error, result) => {
        res.send(result);
    });
});

module.exports = addpromotionrechargehistory;