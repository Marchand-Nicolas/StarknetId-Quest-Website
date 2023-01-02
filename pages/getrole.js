import { useStarknetIdContract } from "../hooks/starknetIdContract";
import { useEffect, useState } from "react";
import { useAccount } from "@starknet-react/core";
import { useMainContract } from "../hooks/mainContract";
import notify from "../utils/notify";
import callApi from "../utils/callApi";
import config from "../utils/config";
import WalletMenu from "../components/walletmenu";
import popup from "../utils/popup";
import LoadingScreen from "../components/loadingScreen";

export default function GetRole() {
    const { contract:starknetIdContract } = useStarknetIdContract()
    const { contract } = useMainContract()
    const [ tokenId, setTokenId ] = useState(undefined)
    const { account } = useAccount()
    const [ userDatas, setUserDatas ] = useState({})
    const [ actionName, setActionName ] = useState('')
    const [ actionUrl, setActionUrl ] = useState('')
    const [ actionDescription, setActionDescription ] = useState('')
    const [ canGetRole, setCanGetRole ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ loadingUserDatas, setLoadingUserDatas ] = useState(true)

    useEffect(async () => {
        if (!tokenId || !account) return;
        const userDatas = await callApi(`${config.apiUrl}get_nft_datas`, { tokenId: tokenId, player: account.address })
        setLoadingUserDatas(false)
        setLoading(true)
        setUserDatas(userDatas)
    }, [tokenId, account])

    useEffect(() => {
        if (account)
        try {
            fetch(`https://api-testnet.aspect.co/api/v0/assets?owner_address=${account.address}&contract_address=${contract.address}&sort_by=minted_at&order_by=asc`).then(res => res.json()).then(async res => {
                const assets = res.assets.map(asset => asset.token_id)
                if (assets[0]) setTokenId([assets[0], 0])
                else setLoading(false)
            })
        } catch (error) {
            notify({message:"The Aspect api is currently unavailable. Please check back later.", warning: true})
            throw(error)
        }
    }, [account])

    useEffect(async () => {
        if (!tokenId) {
            setActionDescription("You don't have any NFTs yet. You can get one by completing the first quest. Check that you are using to the right wallet.")
            setActionName('Quest tree')
            setActionUrl('/quests')
            return;
        }
        if (!contract || !starknetIdContract) return;
        const level =  parseInt(await contract.functions.getLevel(tokenId));
        if (level < 7) {
            setLoading(false)
            setActionDescription("Your NFT must be level 7. Access the Quest Tree to increase its level.")
            setActionName('Quest tree')
            setActionUrl('/quests')
            return;
        }
        if (!userDatas.identityTokenId) return;
        const discordUserId = (await starknetIdContract.get_verifier_data(userDatas.identityTokenId, "28263441981469284", "0x4d546c8d60cfd591557ac0613be5ceeb0ea6f797e7d11c0b5160d145fa3089f")).toString()
        setLoading(false)
        if (discordUserId == '0') {
            setActionDescription("You have to link a Discord account to your identity to get the Odyssey OG role on the official Starknet.id server.")
            setActionName("Verify Discord")
            setActionUrl("https://goerli.app.starknet.id/identities/" + userDatas.identityTokenId)
            return;
        }
        setCanGetRole(true)
    }, [starknetIdContract, contract, userDatas, tokenId])

    return <>
    {
        account ? canGetRole ? 
        <div className="popup contener no-anim">
            <br></br>
            <center>Your configuration seems correct. You just have to click on the button below to get the role.</center>
            <br></br>
            <button onClick={() => callApi(`${config.apiUrl}get_discord_role`, { tokenId: tokenId, player: account.address, identityTokenId: userDatas.identityTokenId }).then(res => {
                if (res.result) popup("Success", `You have been granted the Odyssey OG role. @${res.username} (${res.discordUserId})`)
            })} className="button gold nq-button">
                <div className="line">
                    <p>Get the role</p>
                </div>
            </button>
        </div>
        : <>
        {
            loading || loadingUserDatas ? <LoadingScreen /> : <div className="popup contener no-anim">
            <br></br>
            <center>{actionDescription}</center>
            <br></br>
            <a href={actionUrl} target="_blank" rel="noreferrer">
                <button className="button gold nq-button">
                    <div className="line">
                        <p>{actionName}</p>
                    </div>
                </button>
            </a>
        </div>
        }
    </> : <WalletMenu  hasWallet={false} closeWallet={null} url="/getrole" />
    }
    </>
}