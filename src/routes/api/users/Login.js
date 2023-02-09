const express = require("express");
const router = express.Router();

router.get(`/auth-login`, (req, res) => {
    res.render(`index`,{title:"Express"});
});
module.exports = router;