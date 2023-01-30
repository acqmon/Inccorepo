const express = require("express");
const db = require("../configure/database");

const deletemarketersalesplan = express.Router();

deletemarketersalesplan.delete("/:id", (req, res) => {
    const id = req.params.id;

    const deleteplan = "delete from marketersalestopup where id = ?";
    db.query(deleteplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = deletemarketersalesplan;