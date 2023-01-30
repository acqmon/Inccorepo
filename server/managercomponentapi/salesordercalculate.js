const express = require("express");
const db = require("../configure/database");

const salesordercalculate = express.Router();

salesordercalculate.put("/", (req, res) => {
    const id = req.body.id;
    const userid = req.body.userid;
    const orderperphase = req.body.orderperphase;
    const getdata = "update promotionandsalescalculate set orderamount = orderamount - ? where type = 'salespromotion' and orderamount >= orderperphase and id = ? and userid = ?";
    db.query(getdata, [orderperphase, id, userid], (error, result) => {
        res.send(result);
    });
});

module.exports = salesordercalculate;