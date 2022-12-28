const USDT = artifacts.require("TetherToken");


module.exports = function(deployer) {
  deployer.deploy(USDT, 1000000000, "USDT", "USDT", 6);

  // deployer.link(UniswapV2ERC20, UniswapV2Pair);
  // deployer.deploy(UniswapV2Pair);

  // deployer.link(UniswapV2ERC20, UniswapV2Factory);
  // deployer.link(UniswapV2Pair, UniswapV2Factory);
  // deployer.deploy(UniswapV2Factory, "0x0000000000000000000000000000000000000000");
};
