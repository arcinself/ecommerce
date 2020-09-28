const express = require('express');
const router = express.Router();
const mysql= require('./../lib/datacenter/mysql/connection');

/* GET home page. */
router.get('/', async function(req, res, next) {

    let [err, result] = await to(mysql.customerModel.findAll());

        if(result.length < 1){
            return res.json({
                err : "No customers to display."
            });
        }

        return res.json({
            data : result,
            err : null
        });
});


module.exports = router;
