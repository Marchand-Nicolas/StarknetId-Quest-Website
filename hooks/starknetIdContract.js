import { useContract } from '@starknet-react/core'
import starknetIdContractAbi from '../abi/starknetIdContract.json'
import config from '../utils/config.json'

export function useStarknetIdContract() {
    return useContract({
        abi: starknetIdContractAbi,
        address: config.starknetIdContractAddress,
    })
}