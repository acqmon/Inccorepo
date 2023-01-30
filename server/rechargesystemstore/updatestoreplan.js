const express = require("express");
const db = require("../configure/database");

const updatestoreplan = express.Router();

updatestoreplan.put("/:id", (req, res) => {
    const id = req.params.id;
    const rechargeamount = req.body.rechargeamount;
    const purchasebalance = req.body.purchasebalance;

    const update = "update storetopup set rechargeamount = ?, purchasebalance = ? where id = ?";
    db.query(update, [rechargeamount, purchasebalance, id], (error, result) => {
        res.send(result);
    });
});

module.exports = updatestoreplan;