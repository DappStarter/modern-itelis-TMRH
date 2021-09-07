require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue regret spice pulse harvest office army gate'; 
let testAccounts = [
"0xcaa4faeb601e291f709d2c549b1e7ed0da7465a9af31a20b403460f677d414cb",
"0x17f4b83489e07e0ecd5e31023cadaa450a06158452f65c142f19f0204a4e6478",
"0x14a8ca744e05619c666838ddc5511d1d7531be4967b29f00af501a4725a1a5eb",
"0xd01a4a51cc517d3fc85658ab81e3b3475eb7e76e2d593bb9c6b30e9ab99261dd",
"0xa9c516bde2612ec6c038304891396a1b3e028c36fd7eb1c45b27b4ed60cfb276",
"0x34c56ed26d1e49b9486ba72082e71d7c512a6f80c5f03de203bd4b0aabc48747",
"0x5cb9d216aa51a26c93fff4c09ffc6b3b2fa8588fd425fc70830c83de7dc70a4f",
"0x114d553e8886f8af997d0df35a57ccd2177d90b6d361c66aa3c79c54f119ea53",
"0x0f69ab76902d4b17064e1ea0380817ca18f2632cad6a1e4190d721f4d2cdf40d",
"0x44a682b771062bff9068f3331e8a7636cafd13445920e0e7971ef3b6227c6a5b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

