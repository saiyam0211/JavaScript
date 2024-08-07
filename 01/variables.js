const accountId = 125;
let accountEmail = "test@gmail.com";
var accountPassword = "12345";
accountCity = "ambala";
let accountState;

/*
    Dont use var because of issue on block scope and functional scope
*/

console.table([accountEmail, accountId,accountState, accountPassword, accountCity])