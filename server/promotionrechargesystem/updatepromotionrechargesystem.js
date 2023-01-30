const express = require("express");
const db = require("../configure/database");

const updatepromotionrechargesystem = express.Router();

updatepromotionrechargesystem.put("/:id", (req, res) => {
    const id = req.params.id;
    const rechargeamount = req.body.rechargeamount;
    const orderamount = req.body.orderamount;
    const cut = req.body.cut;

    const update = "update promotionandsales set rechargeamount = ?, orderamount = ?, cut = ? where id = ?";
    db.query(update, [rechargeamount, orderamount, cut, id], (error, result) => {
        res.send(result);
    });
});

module.exports = updatepromotionrechargesystem;