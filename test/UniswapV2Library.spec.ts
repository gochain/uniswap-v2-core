import chai, { expect } from 'chai'
import {solidity, deployContract, MockProvider} from "ethereum-waffle";
import { Contract } from 'ethers'
import V2LibraryHash from "../build/V2LibraryHash.json";

chai.use(solidity)

describe('UniswapV2Library', () => {
    const provider = new MockProvider({ganacheOptions:{
        hardfork: 'istanbul',
        mnemonic: 'horn horn horn horn horn horn horn horn horn horn horn horn',
        gasLimit: 9999999
    }})

    const [wallet] = provider.getWallets()

    let hasher: Contract
    beforeEach(async function() {
        hasher = await deployContract(wallet, V2LibraryHash)
    })

    it('initHash', async () => {
        var hash = await hasher.initHash();
        expect(hash).to.eq("0xf67eb8143e5a1324e1838ed998cb469c9741b51856a312f9af59bb2870a6fa8e");
    })
})