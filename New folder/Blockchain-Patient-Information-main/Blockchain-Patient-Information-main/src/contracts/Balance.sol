// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract GetBalance {
    function getBalance(address account) public view returns (uint256) {
        return address(account).balance;
    }
}
