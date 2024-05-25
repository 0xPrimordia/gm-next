// src/components/Mint.tsx
import { ConnectWallet, useDisconnect, useAddress, useContract, Web3Button } from '@thirdweb-dev/react';
import { useState } from 'react';

const MintingComponent = () => {
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const { contract } = useContract('<NFT_COLLECTION_ADDRESS>', 'nft-collection');
  const [minting, setMinting] = useState(false);
  const [mintError, setMintError] = useState<string | null>(null);

  const mintNFT = async () => {
    setMinting(true);
    setMintError(null);
    try {
      await contract.erc721.mint({
        name: 'GM',
        description: 'GM/GN',
        image: '<IMAGE_URL>',
      });
      alert('Minted successfully!');
    } catch (err) {
      setMintError(err.message);
    } finally {
      setMinting(false);
    }
  };

  return (
    <div className="minting-component">
      <h2>Mint Your NFT</h2>
      {!address ? (
        <ConnectWallet className="btn btn-primary" />
      ) : (
        <div>
          <Web3Button
            contractAddress="<NFT_COLLECTION_ADDRESS>"
            action={mintNFT}
            className="btn btn-primary"
          >
            {minting ? 'Minting...' : 'Mint NFT'}
          </Web3Button>
          <button onClick={disconnectWallet} className="btn btn-secondary ml-2">
            Disconnect
          </button>
          {mintError && <p className="text-red-500 mt-2">{mintError}</p>}
        </div>
      )}
    </div>
  );
};

export default MintingComponent;
