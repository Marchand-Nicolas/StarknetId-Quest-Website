import { useAccount, useConnectors, useStarknet } from '@starknet-react/core';
import { useState, useEffect, FunctionComponent } from 'react';
import ModalMessage from "./UI/modalMessage";
import Button from "./UI/button";

interface WrongNetworkMenuProps {
}

const WrongNetworkMenu: FunctionComponent<WrongNetworkMenuProps> = ({}) => {
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);
  const { disconnect } = useConnectors();
  const { address  } = useAccount();
  const { library } = useStarknet();
  useEffect(() => {
    if (!address) return;
    const STARKNET_NETWORK = {
        mainnet: "0x534e5f4d41494e",
        testnet: "0x534e5f474f45524c49",
    };
    setIsWrongNetwork(library.chainId !== STARKNET_NETWORK.testnet);
  }, [library, address]);

  function disconnectByClick() {
      disconnect();
      setIsWrongNetwork(false);
  }

  return <ModalMessage
  open={isWrongNetwork}
  title={"Wrong network"}
  closeModal={() => setIsWrongNetwork(false)}
    message={
    <div className="mt-4 flex flex-col items-center justify-center text-center">
        <p>
        This app only supports Starknet Testnet, you have to change your
        network to be able use it.
        </p>
        <div className="mt-3">
            <Button className='nq-button' onClick={() => disconnectByClick()}>
                <p>Disconnect</p>
            </Button>
        </div>
    </div>
    }
  />
}

export default WrongNetworkMenu;