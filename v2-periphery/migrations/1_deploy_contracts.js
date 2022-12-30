const UniswapV2Router02 = artifacts.require("UniswapV2Router02");


const factoryAddress = "0x6E466FA015E6760165564B805Ada8E6f826dEF73";
const wethAddress = "0x1fEE6b70597f23262617227731c968Df059BC31D";


module.exports = function (deployer) {
  deployer.deploy(UniswapV2Router02, factoryAddress, wethAddress);
};
