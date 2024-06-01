const con = require('../config/dbconnect');

let getListUser = (req, res) => {
    let user = [];
    con.query(
        'select * from thucanchannuoi.user',
        function (err, results, fields) {
            console.log('Check mysql');
            console.log(results);
            user = results;
            console.log('Check user');
            console.log(JSON.stringify(user));
            return res.render("manageruser.ejs", { dataUser: user });
        }
    );
    //logic

};

module.exports = { getListUser };