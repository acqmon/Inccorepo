const express = require("express");
const db = require("../configure/database");

const deleteuserplan = express.Router();

deleteuserplan.delete("/:id", (req, res) => {
    const id = req.params.id;

    const deleteplan = "delete from usertopup where id = ?";
    db.query(deleteplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = deleteuserplan;