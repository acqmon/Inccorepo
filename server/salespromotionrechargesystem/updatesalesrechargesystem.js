const express = require("express");
const db = require("../configure/database");

const updatesalesrechargesystem = express.Router();

updatesalesrechargesystem.put("/:id", (req, res) => {
    const id = req.params.id;
    const rechargeamount = req.body.rechargeamount;
    const orderamount = req.body.orderamount;
    const phase = req.body.phase;
    const cut = req.body.cut;

    const update = "update promotionandsales set rechargeamount = ?, orderamount = ?, phase = ?, orderperphase = orderamount/phase, cut = ? where id = ?";
    db.query(update, [rechargeamount, orderamount, phase, cut, id], (error, result) => {
        res.send(result);
    });
});

module.exports = updatesalesrechargesystem;