var Token = artifacts.require("./VKenaf.sol");
var tokenContract;
module.exports = function(deployer) {
    var admin = "0x5d6746f7d97670CFeF6007e065745c9E104b9755"; 
    var totalTokenAmount = 100000000;
    return Token.new(totalTokenAmount).then(function(result) {
        tokenContract = result;
    });
};
