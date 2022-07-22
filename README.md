---

# isomorphic-wallet

```
      import Transaction, { SigmaType, TransactionJson } from 'ergoscript';
      import ErgoWallet from 'isomorphic-wallet';


      const wallet = await new ErgoWallet().fromMnemonics('***');
      wallet.setPublicAddress('****');

      // use with ergoscript js tx builder:
      const tx = new Transaction(
        [
          {
            funds: {
              ERG: 0.001 * NANO_ERG_IN_ERG,
              tokens: [
                {
                  tokenId: '',
                  amount: 1,
                  isMint: true,
                },
              ],
            },
            toAddress: '****',
            additionalRegisters: {
              R4: { value: 'Best token ever', type: SigmaType.ByteArray },
              R5: { value: 'Best token ever description', type: SigmaType.ByteArray },
              R6: { value: 0, type: SigmaType.Int },
              R7: { value: '0e020101', type: SigmaType.Raw },
              R8: { value: 'somethings', type: SigmaType.ByteArray },
              R9: {
                value:
                  'https://ipfs.io/ipfs/bafybeidrtmn7grzijipexukinmkmlkmpuugjwv5i2hy33gdipql27myshu',
                type: SigmaType.ByteArray,
              },
            },
          },
        ],
        { wallet }
      );

      const tx = await txInstance.build();

      try {
        const signedTx = wallet.sign_tx(tx.toJSON());
        const txHash = await wallet.submit_tx(signedTx);

      } catch (e) {
        console.error(e);
      }
```
[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

[build-img]: https://github.com/nirvanush/isomorphic-wallet/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/nirvanush/isomorphic-wallet/actions/workflows/release.yml
[npm-img]: https://img.shields.io/npm/v/isomorphic-wallet
[npm-url]: https://www.npmjs.com/package/isomorphic-wallet
[issues-img]: https://img.shields.io/github/issues/nirvanush/isomorphic-wallet
[issues-url]: https://github.com/nirvanush/isomorphic-wallet/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
