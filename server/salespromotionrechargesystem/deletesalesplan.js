const express = require("express");
const db = require("../configure/database");

const deletesalesplan = express.Router();

deletesalesplan.delete("/:id", (req, res) => {
    const id = req.params.id;

    const deleteplan = "delete from promotionandsales where id = ?";
    db.query(deleteplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = deletesalesplan;