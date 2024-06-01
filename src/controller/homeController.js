const con = require('../config/dbconnect');

let getHomepage = (req, res) => {
    let user = [];
    con.query(
        'select * from thucanchannuoi.user',
        function (err, results, fields) {
            console.log('Check mysql');
            console.log(results);
            user = results;
            console.log('Check user');
            console.log(JSON.stringify(user));
            return res.render("index.ejs", { dataUser: JSON.stringify(user) });
        }
    );
    //logic

};

module.exports = { getHomepage };