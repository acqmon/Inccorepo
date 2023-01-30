const express = require("express");
const db = require("../configure/database");

const updateuserplan = express.Router();

updateuserplan.put("/:id", (req, res) => {
    const id = req.params.id;
    const rechargeamount = req.body.rechargeamount;
    const purchasebalance = req.body.purchasebalance;

    const update = "update usertopup set rechargeamount = ?, purchasebalance = ? where id = ?";
    db.query(update, [rechargeamount, purchasebalance, id], (error, result) => {
        res.send(result);
    });
});

module.exports = updateuserplan;