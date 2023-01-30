const express = require("express");
const db = require("../configure/database");

const selectupdateuserplan = express.Router();

selectupdateuserplan.get("/:id", (req, res) => {
    const id = req.params.id;

    const getplan = "select * from usertopup where id = ?";
    db.query(getplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectupdateuserplan;