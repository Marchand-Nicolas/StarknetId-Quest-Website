import { useStarknetIdContract } from "../hooks/starknetIdContract";
import { useEffect, useState } from "react";
import { useStarknet, useConnectors } from "@starknet-react/core";
import { getCookie } from "../functions";
import { useMainContract } from "../hooks/mainContract";
import notify from "../utils/notify";
import callApi from "../utils/callApi";
import config from "../utils/config";
import WalletMenu from "../components/walletmenu";
import popup from "../utils/popup";

export default function GetRole() {
    const { connect, connectors } = useConnectors()
    const { contract:starknetIdContract } = useStarknetIdContract()
    const { contract } = useMainContract()
    const [ tokenId, setTokenId ] = useState(undefined)
    const { account } = useStarknet()
    const [ userDatas, setUserDatas ] = useState({})
    const [ actionName, setActionName ] = useState('')
    const [ actionUrl, setActionUrl ] = useState('')
    const [ actionDescription, setActionDescription ] = useState('')
    const [ canGetRole, setCanGetRole ] = useState(false)
    const [ discordUserId, setDiscordUserId ] = useState('')

    useEffect(async () => {
        if (!tokenId || !account) return;
        const userDatas = await callApi(`${config.apiUrl}get_nft_datas`, { tokenId: tokenId, player: account })
        setUserDatas(userDatas)
        if (userDatas.identityTokenId != '0') {
            function error() {
                popup("Error", "Your starknet identity is outdated, please click on the gear icon at the bottom right to change it. Otherwise, some quests will not work.")
            }
            try {
                const res = await (await fetch(`https://api-testnet.aspect.co/api/v0/asset/${config.starknetIdContractAddress}/${userDatas.identityTokenId}`)).json()
                if (!res.id) error()
            }
            catch {error()}
        }
    }, [tokenId, account])

    useEffect(() => {
        if (account)
        try {
            fetch(`https://api-testnet.aspect.co/api/v0/assets?owner_address=${account}&contract_address=${contract.address}&sort_by=minted_at&order_by=asc`).then(res => res.json()).then(async res => {
                const assets = res.assets.map(asset => asset.token_id)
                setTokenId([assets[0], 0])
            })
        } catch (error) {
            notify({message:"The Aspect api is currently unavailable. Please check back later.", warning: true})
            throw(error)
        }
    }, [account])

    useEffect(async () => {
        if (!tokenId) {
            setActionDescription("You don't have any NFTs yet. You can get one by completing the first. Check that you are using to the right wallet.")
            setActionName('Quest tree')
            setActionUrl('/quests')
            return;
        }
        if (!contract || !starknetIdContract) return;
        const level =  parseInt(await contract.functions.getLevel(tokenId));
        if (level < 7) {
            setActionDescription("Your NFT must be level 7. Access the Quest Tree to increase its level.")
            setActionName('Quest tree')
            setActionUrl('/quests')
            return;
        }
        const discordUserId = (await starknetIdContract.get_verifier_data([userDatas.identityTokenId, 0], "28263441981469284", "0x06520a4a1934c84a385a3088952c3812c96f9e9c614bc4d483daff5622ea9fad")).toString()
        if (discordUserId == '0') {
            setActionDescription("You have to link a Discord account to your identity to get the Odyssey OG role on the official Starknet.id server.")
            setActionName("Verify Discord")
            setActionUrl("https://goerli.app.starknet.id/identities/" + userDatas.identityTokenId)
            return;
        }
        setCanGetRole(true)
    }, [starknetIdContract, contract, userDatas, tokenId])

    return account ? canGetRole ? 
    <div className="popup contener no-anim">
        <center>Your configuration seems correct. You just have to click on the button below to get the role.</center>
        <br></br>
        <button onClick={() => callApi(`${config.apiUrl}get_discord_role`, { tokenId: tokenId, player: account }).then(res => {
            popup("Success", "You have been granted the Odyssey OG role.")
        })} className="button gold nq-button">
            <div className="line">
                <p>Get the role</p>
            </div>
        </button>
    </div>
    : <div className="popup contener no-anim">
        <center>{actionDescription}</center>
        <br></br>
        <a href={actionUrl} target="_blank" rel="noreferrer">
            <button className="button gold nq-button">
                <div className="line">
                    <p>{actionName}</p>
                </div>
            </button>
        </a>
    </div> : <WalletMenu url="/getrole" />
}