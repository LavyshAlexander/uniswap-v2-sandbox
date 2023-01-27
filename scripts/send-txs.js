// Deposit WETH

const accs = await web3.eth.getAccounts()
const addressFrom = accs[0] // '0x22fe3122E06185729424C8bAb20EF46a157512f7'
const addressTo = '0x1350Ed3177fF9E1677Fc49140d62Ed1fD20DC60F'   // BNB_WETH Pair

const WETH9 = artifacts.require('WETH9')
const w = await WETH9.at(addressTo)
const depositABI = w.abi.filter(a => a.name === 'deposit')[0]
const encodedDepositABI = web3.eth.abi.encodeFunctionSignature(depositABI)

const value = web3.utils.toWei('10', 'ether')

// Create transaction
const deploy = async () => {
	console.log(
		`Attempting to make transaction from ${addressFrom} to ${addressTo}`
	)

	const tx = {from: addressFrom, to: addressTo, value, data: encodedDepositABI, gas: '42000',}
	// const createTransaction = await web3.eth.accounts.signTransaction(tx, key)
	const createTransaction = web3.eth.signTransaction(tx, tx.from); // Cause of Ganache has unlocked accounts

	// Deploy transaction
	const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction)

	console.log(
		`Transaction successful with hash: ${createReceipt.transactionHash}`
	)
}

deploy()

w.deposit({value: value, from: accs[0]})