const con = require('../config/dbconnect');

let getHomepage = (req, res) => {
    //logic
    res.render("index.ejs");
};

module.exports = { getHomepage };