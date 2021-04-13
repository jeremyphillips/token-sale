pragma solidity ^0.5.16;
// pragma solidity ^0.4.2;

contract MyToken {
	// not recognizing, undefined
	string public name = "MyToken Token";

	uint256 public totalSupply;

	mapping(address => uint256) public balanceOf;

	constructor (uint256 _initialSupply) public {
		balanceOf[msg.sender] = _initialSupply;
		totalSupply = _initialSupply;
	}

}