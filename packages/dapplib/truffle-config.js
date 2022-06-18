require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski street dash scrub purpose half enroll slot general'; 
let testAccounts = [
"0xfb28092e86e06ef43f2fefd8f5ad3a4a7104af3d33acd2dba00d07137c7993b2",
"0x8c1b743741777835a81fafdc7897aaea4d529dfa58f397fbff8f501910817ce9",
"0x30fb72c3c08f256fb297d0e50b75cfa9537d46a3458919d96beae74fccce309c",
"0x9124cb76f48d9d33cf58885141b52560a69d708f7e50716c6a92032da484b51d",
"0x77689c2d3ac763a33673748457b279cc8066cfce793d77f2d277bae9f9a1c969",
"0x42bf5f4b24e70278bbf7c5a3f72310c539724375ac96e809bb6c2c00280047ac",
"0xba1a50681d2e0108f9fb15dac3e2068b81f3ba70c98a5e90962119038cf8721e",
"0x432ffba7343957a8decf0b07b158f9d77e8ca6557c452c4930c1bc1e6fea3153",
"0xbedef7874142e23af0ea168c034804f89cb500e675c7431e3c81e5558057bb12",
"0xdf4b0a600b40af8eb087bfbfa6952231d81af894d0235170d70bbfb528d3db3a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

