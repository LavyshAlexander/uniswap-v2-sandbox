const BNB = artifacts.require("BNB");

module.exports = function(deployer) {
  deployer.deploy(
    BNB,
    10**8, // uint256 initialSupply,
    'BNB', // string tokenName,
    8,     // uint8 decimalUnits,
    'BNB'  // string tokenSymbol
  );
};
