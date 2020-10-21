
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var url = '/account/create/' + name + '/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log("Account Created!");
                document.getElementById("status").innerHTML = "Account successfully created!";
            }
        });    
}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var url = '/account/login/' + email + '/' + password;

    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res.body);
            document.getElementById("status").innerHTML = "Congratulations, you have successfully logged in!";
        }
    });
}

function deposit() {
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    var url = '/account/deposit/' + email +'/' + amount;

    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
            document.getElementById("status").innerHTML = "Your deposit was a failure.";
        }
        else{
            console.log(res);
            document.getElementById("status").innerHTML =  "Your deposit was a success! Your current balance is: $" + JSON.stringify(res.body.balance);
        }
    });
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    var url = '/account/withdraw/' + email +'/' + amount;

    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
            document.getElementById("status").innerHTML = "Your withdrawal was a failure.";
        }
        else{
            console.log(res);
            document.getElementById("status").innerHTML =  "Your withdrawal was a success! Your current balance is: $" + JSON.stringify(res.body.balance);
        }
    });
}

function transactions() {
    var email = document.getElementById('email').value;
    var url = '/account/transactions/' + email;

    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res);
            document.getElementById("status").innerHTML = "Your transaction history is " + JSON.stringify(res.body.transaction);
        }
    });
}

function balance() {
    var email = document.getElementById('email').value;
    var url = '/account/get/' + email;

    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res);
            document.getElementById("status").innerHTML = "Your Current Balance Is: $" + JSON.stringify(res.body.balance);
        }
    });
}

function allData() {
    var url = '/account/all';

    superagent
    .get(url)
    .end(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res);
            document.getElementById("status").innerHTML = "All account information: " + JSON.stringify(res.body);
        }
    });
}

