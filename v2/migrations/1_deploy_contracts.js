const UniswapV2ERC20 = artifacts.require("UniswapV2ERC20");
const UniswapV2Pair = artifacts.require("UniswapV2Pair");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");


module.exports = function(deployer) {
  deployer.deploy(UniswapV2ERC20);

  deployer.link(UniswapV2ERC20, UniswapV2Pair);
  deployer.deploy(UniswapV2Pair);

  deployer.link(UniswapV2ERC20, UniswapV2Factory);
  deployer.link(UniswapV2Pair, UniswapV2Factory);
  deployer.deploy(UniswapV2Factory, "0x0000000000000000000000000000000000000000");
};
