const express = require("express");
const db = require("../configure/database");

const addsupplydiscount = express.Router();

addsupplydiscount.post("/", (req, res) => {
    const billamount = req.body.billamount;
    const billamountone = req.body.billamountone;
    const discount = req.body.discount;

    const getdata = "insert into supplydiscount (billamount,billamountone, discount) values (?,?,?)";
    db.query(getdata, [billamount, billamountone, discount], (error, result) => {
        res.send(result);
    });
});
addsupplydiscount.put("/:id", (req, res) => {
    const id = req.params.id;
    const billamount = req.body.billamount;
    const billamountone = req.body.billamountone;
    const discount = req.body.discount;

    const getdata = "update supplydiscount set billamount = ? , billamountone = ?, discount =? where id = ?";
    db.query(getdata, [billamount, billamountone, discount, id], (error, result) => {
        res.send(result);
    });
});

addsupplydiscount.get("/", (req, res) => {
    const getdata = "select * from supplydiscount";
    db.query(getdata, (error, result) => {
        res.send(result);
    });
});

addsupplydiscount.delete("/:id", (req, res) => {
    const id = req.params.id;
    const getdata = "delete from supplydiscount where id = ?";
    db.query(getdata, id, (error, result) => {
        res.send(result);
    });
});



module.exports = addsupplydiscount;