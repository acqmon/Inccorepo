const express = require("express");
const db = require("../configure/database");

const updatestoresalesplan = express.Router();

updatestoresalesplan.put("/:id", (req, res) => {
    const id = req.params.id;
    const rechargeamount = req.body.rechargeamount;
    const salesbalance = req.body.salesbalance;
    const discount = req.body.discount;

    const update = "update storesalestopup set rechargeamount = ?, salesbalance = ?, discount = ? where id = ?";
    db.query(update, [rechargeamount, salesbalance, discount, id], (error, result) => {
        res.send(result);
    });
});

module.exports = updatestoresalesplan;