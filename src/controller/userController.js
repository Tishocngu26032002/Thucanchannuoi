const con = require('../config/dbconnect');

let getListUser = (req, res) => {
    let user = [];
    con.query(
        'select * from thucanchannuoi.user',
        function (err, results, fields) {
            user = results;
            return res.render("manageruser.ejs", { dataUser: user });
        }
    );
    //logic

};

let getDetailPage = (req, res) => {
    let iduser = req.params.iduser;
    let user;
    con.query(
        'select * from thucanchannuoi.user where iduser=?', [req.params.iduser],
        function (err, results, fields) {
            user = results;
            console.log('Check user');
            console.log(typeof (user), user);
            return res.render("detailuser.ejs", { detailUser: user });
        }
    );
}

let formRegister = (req, res) => {
    return res.render('register.ejs');
}

let register = (req, res) => {
    console.log("check req", req.body);
    con.query('insert into thucanchannuoi.user(username, password, name, phone, address, status, role) values (?,?,?,?,?,?,?)',
        [req.body.UserName, req.body.Password, req.body.Name, req.body.Phone, req.body.Address, 'Chờ duyệt', 'user'],
        function (err, results) {
            if (err) {
                return res.send('register user not success');
            }
            return res.send('register user successfully');
        }
    )
}

let deleteUser = (req, res) => {
    let Iduser = req.body.Iduser;
    con.query('delete from thucanchannuoi.user where iduser=?', Iduser,
        function (err, results) {
            if (err) {
                return res.send('delete user not success');
            }
            return res.send('delete user successfully');
        }
    )
}

let getEditPage = (req, res) => {
    return res.send('form edit');
}

let showFormLogin = (req, res) => {
    return res.render('showFormLogin.ejs');
}

let authUser = (req, res) => {
    let { username, password } = req.body;
    con.query('select * from thucanchannuoi.user where username=? and password=?', [username, password],
        function (err, results) {
            if (err) {
                return res.send('login user not success');
            }
            if (results.length === 0) {
                // Nếu không tìm thấy người dùng, gửi thông báo lỗi
                return res.status(401).send('Sai tên đăng nhập hoặc mật khẩu.');
            }
            req.session.user = {
                role: `${results[0].role}`
            };
            return res.send(req.session.user);
        }
    )
}


module.exports = { getListUser, getDetailPage, formRegister, register, deleteUser, getEditPage, showFormLogin, authUser };