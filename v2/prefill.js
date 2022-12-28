let factory = await UniswapV2Factory.deployed()
factory.createPair('0x82f1247B98cA5e35686B5df6F51f48b3F61274A4', '0xf5a85be3cdf4A0130c20B807bE86E9B1bCF5C258')

let usdt_usdc = await UniswapV2Pair.at('0xc045B661f5B8A2d213a90C4A70CE688638F5185F')