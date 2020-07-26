const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config({ path: './.env' });
const app = express();

// server.js
const bodyParser = require('body-parser');
const { debugPort } = require("process");
const { join } = require("path");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,x-Requetsed-with,Content-Type,Accept");
    next();
});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});


app.use(express.static(__dirname + '/'));

// -- routes
app.get('/', (req, res) => {
    res.render("/index");
});
app.get('/index', (req, res) => {
    res.render("/index");
});
app.get('/reg', (req, res) => {
    res.render("/reg");
});
app.get('/contactus', (req, res) => {
    res.render("/contactus");
});
app.get('/aboutus', (req, res) => {
    res.render("/aboutus");
});
app.get('/cart', (req, res) => {
    res.render("/cart");
});
app.get('/tran',(req,res) => {
    res.render('/tran');
});

// database connect
db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("mysql database connected");
    }
})



app.post('/contact', (req, res) => {
    const emailid = req.body.emailid;
    const pwd = req.body.pwd;
    console.log(emailid, pwd);
    db.query('select emailid from signup where emailid=? and pwd=?', [emailid,pwd], (err, results, fields) => {
        // console.log(results[0].json.stringify(results[0]));
        if (JSON.stringify(results[0])==undefined) {
            res.send({
                "code": 400,
                "failed": "can't find username and password"
            });
        }
        else {
            res.send({
                "code": 200,
                "success": "successfully login"
            }); 
        }
    });
});

app.post('/forgot', (req, res) => {
    const emailid = req.body.emailid;
    const pwd =req.body.pwd;
    console.log(emailid);
    db.query('update signup set pwd=? where emailid=?', [pwd,emailid], (err, results, fields) => {
        // console.log(results[0].json.stringify(results[0]));
        var resval=parseInt(JSON.stringify(results["affectedRows"]));
        if (resval==1) {
        
            res.send({
                "code": 200,
                "success": "Record Updated"
            }); 
        }
        else {
            res.send({
                "code": 400,
                "failed": "Record Not Found"
            });
        }
    });
});

app.post('/signup', (req, res) => {
    const data = req.body;
    console.log(data);
    db.query('Insert into signup set ?', [data], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.send({
                "code": 400,
                "failed": "something went wroung"
            });
        }
        else {
            res.send({
                "code": 200,
                "success": "successfully signup"
            });
            // res.redirect('/WebContent/cart');
        }
    });
});

app.post('/feedback', (req, res) => {
    const data = req.body;
    console.log(data);
    db.query('Insert into feedback set ?', [data], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.send({
                "code": 400,
                "failed": "something went wroung"
            });
        }
        else {
            res.send({
                "code": 200,
                "success": "successfully signup"
            });
            // res.redirect('/WebContent/cart');
        }
    });

});

app.post('/carttran', (req, res) => {
    res.send({
        "code": 200,
        "success": "successfully signup"
    });        
});
app.post('/tr', (req, res) => {
    var emailid=req.body.emailid;
    console.log(emailid);
    db.query('select address from signup where emailid=?', [emailid], (err, results, fields) => {
        console.log(err );
        if (err) {
            res.send({
                "code": 400,
                "failed": "can't find username and password"
            });
        }
        else {
            res.send({
                "code": 200,
                "success": "successfully login",
                "address":results[0]
            }); 
        }
    });
});

app.post('/debitcreditcard', (req, res) => {
    const data = req.body;
    console.log(data);
    db.query('Insert into debitcreditcard set ?', [data], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.send({
                "code": 400,
                "failed": "something went wroung"
            });
        }
        else {
            res.send({
                "code": 200,
                "success": "User Registration is completed"
            });
            // res.redirect('/WebContent/cart');
        }
    });
});


app.listen(3007, () => {
    console.log("server started on port 3007");
})