const express = require("express");
const db = require("../configure/database");

const promotionordercalculate = express.Router();

promotionordercalculate.put("/", (req, res) => {
    const id = req.body.id;
    const userid = req.body.userid;
    const orderamount = req.body.orderamount;
    const getdata = "update promotionandsalescalculate set orderamount = orderamount - ? where type = 'promotion' and id = ? and userid = ?";
    db.query(getdata, [orderamount, id, userid], (error, result) => {
        res.send(result);
    });
});

module.exports = promotionordercalculate;