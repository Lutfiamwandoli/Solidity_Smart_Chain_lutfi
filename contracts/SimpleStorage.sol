// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public storedData;

    event DataStored(uint256 newData);

    function store(uint256 newData) public {
        storedData = newData;
        emit DataStored(newData);
    }

    function retrieve() public view returns (uint256) {
        return storedData;
    }
}
