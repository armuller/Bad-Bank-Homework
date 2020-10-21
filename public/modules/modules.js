var ui = {};

ui.navigation = `
<!-- ------------- YOUR CODE: Login UI ------------- -->
`;

ui.createAccount = `
<input type="input" id="name" placeholder="name">
<input type="input" id="email" placeholder="email">
<input type="input" id="password" placeholder="password">
<button type="button" class="btn btn-info" onclick="create()">Create Account</button>
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
`;

ui.default = `
<main role="main" class="container" style="margin-top:20px">
<div id="target"></div>
<div class="tab-content"></div>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">AlexBank Home Page</div>
    <div class="card-body">
      <h5 class="card-title">Please Invest In My Bank #stonks</h5>
      <p class="card-text">Your investment will be used to fund my chipotle budget!</p>
    </div>
</main>
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
