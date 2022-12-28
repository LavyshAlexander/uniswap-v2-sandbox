const USDC = artifacts.require("FiatTokenProxy");
// const adminAddress = "0x22fe3122E06185729424C8bAb20EF46a157512f7";
const adminAddress = "0x024b342816efAb0489145f53720Fa46F7F640c25";

module.exports = function(deployer) {
  deployer.deploy(USDC, adminAddress);

  // deployer.link(UniswapV2ERC20, UniswapV2Pair);
  // deployer.deploy(UniswapV2Pair);

  // deployer.link(UniswapV2ERC20, UniswapV2Factory);
  // deployer.link(UniswapV2Pair, UniswapV2Factory);
  // deployer.deploy(UniswapV2Factory, "0x0000000000000000000000000000000000000000");
};
