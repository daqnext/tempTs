import { ethers } from 'ethers'
const abiCoder = new ethers.utils.AbiCoder()

function hex2buf(h: string) {
    return Buffer.from(h.replace(/^0x/i, ''), 'hex')
}


const i=0
const address="0x37e9e835171e40ceb35cdb0a05346f9c451c6156"
const amount= 1


function main(){
    let result = Buffer.concat([
        hex2buf(abiCoder.encode(['uint256'], [i])),
        hex2buf(address),
        hex2buf(abiCoder.encode(['uint256'], [amount])),
    ])

    console.log(result)
}

main()