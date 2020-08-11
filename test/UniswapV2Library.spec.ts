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
        expect(hash).to.eq("0x345929ea4d0bd4e4f9553e143bf6804725c83deb4612a47ac322d2613f5393ef");
    })
})