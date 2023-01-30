const express = require("express");
const db = require("../configure/database");

const selectupdatemarketersalesplan = express.Router();

selectupdatemarketersalesplan.get("/:id", (req, res) => {
    const id = req.params.id;

    const getplan = "select * from marketersalestopup where id = ?";
    db.query(getplan, id, (error, result) => {
        res.send(result);
    });
});

module.exports = selectupdatemarketersalesplan;