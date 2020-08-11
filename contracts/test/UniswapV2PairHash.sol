pragma solidity =0.5.16;

import '../UniswapV2Factory_flatten.sol';

contract V2LibraryHash {
    function initHash() pure public returns (bytes32) {
        return keccak256(type(UniswapV2Pair).creationCode);
    }
}
