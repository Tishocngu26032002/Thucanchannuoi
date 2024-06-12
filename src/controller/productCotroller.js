const con = require('../config/dbconnect');

let getProduct = (req, res) => {
    let product;
    con.query('SELECT * FROM animalfeed LEFT JOIN pricehistory ON animalfeed.idanifeed = pricehistory.idanifeed group by animalfeed.idanifeed having pricehistory.changetime >= ALL(select changetime from pricehistory where animalfeed.idanifeed = pricehistory.idanifeed);',
        function (err, results, fields) {
            if (err) {
                res.send('Loi khi lay san pham');
            }
            product = results;
            console.log(product);
            return res.render('product.ejs', { dataProduct: product });
        }
    );
}

module.exports = { getProduct };