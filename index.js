// setup server
var express = require('express');
var app     = express();

app.listen(3000, function(){
    console.log('Running on port 3000');
});

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);


// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
db.defaults({ accounts: []}).write();

// required data store structure
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string
    var account = {
        "name" : req.params.name,
        "email" : req.params.email,
        "balance" : 0,
        "password" : req.params.password,
        "transaction" : [],
    };
    db.get('accounts').push(account).write();
    res.send(account);
    console.log("Success! Account Created")
});

app.get('/account/login/:email/:password', function (req, res) {
    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    var pass = db.get('accounts').find({email: req.params.email}).value();
    if (pass.password == req.params.password) {
        res.send(pass); 
        console.log(pass);
    }
    else {
        res.send(null);
    }
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    var bal = db.get('accounts').find({email: req.params.email}).value();
    res.send(bal);
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    /*
    var balance = db.get('accounts').find({email: params.email}).value().balance;
    var newbalance = balance + req.params.amount
    db.get('accounts').find({email: params.email}).push({balance: newbalance}).write();
    res.send(db.get('accounts').find({email: params.email})); */
    var bal = db.get('accounts').find({email: req.params.email}).value();
    var dep = req.params.amount;
    var newbal = parseFloat(bal.balance) + parseFloat(dep);
    var trans = bal.transaction + "Deposited " + dep + ", ";

    db.get('accounts').find({email: req.params.email}).assign({balance: newbal}).write();
    db.get('accounts').find({email: req.params.email}).assign({transaction: trans}).write();
    res.send(bal);
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    var bal = db.get('accounts').find({email: req.params.email}).value();
    var withdraw = req.params.amount;
    var newbal = parseFloat(bal.balance) - parseFloat(withdraw);
    var trans = bal.transaction + "Withdrew " + withdraw + ", ";

    db.get('accounts').find({email: req.params.email}).assign({balance: newbal}).write();
    db.get('accounts').find({email: req.params.email}).assign({transaction: trans}).write();
    res.send(bal);
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
    var trans = db.get('accounts').find({email: req.params.email}).value();
    res.send(trans);
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    res.send(db.get('accounts'));
});
