const MyToken = artifacts.require("./MyToken.sol");

contract('MyToken', (accounts) => {
	var tokenInstance;

	it('initializes the contract with the correct values', () => {
		return MyToken.deployed().then( (instance) => {
			tokenInstance = instance;
			return tokenInstance.name();
		}).then( (name) => {
			assert.equal(name, 'MyToken Token', 'Has the correct name.')
		});
	})

	it('allocates the initial supply upon deployment', () => {
		return MyToken.deployed().then( (instance) => {
			tokenInstance = instance;
			return tokenInstance.totalSupply();

		}).then( (totalSupply) => {
			assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
			return tokenInstance.balanceOf(accounts[0]);

		});
	})
})