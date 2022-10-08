import { useState } from "react";
import { useStarknet } from '@starknet-react/core'
import styles from '../styles/Home.module.css'
import React from 'react'
import WalletMenu from '../components/walletmenu.js'
import Common from "../components/common";

export default function Home() {;
  const [connectMenuToggled, setConnectMenuToggled] = useState(false);
  const [url, setUrl] = useState('');
  const { account } = useStarknet()
  
  return (
  <div className="default_background">
    <Common account={account} />
    {connectMenuToggled ? <WalletMenu hasWallet={false} closeWallet={null} url={url} close={() => setConnectMenuToggled(false)} /> : null}
    <nav className={styles.nav}>
    <h1 className="title v2">STARKNET.ID</h1>
    <div className="line">
      <button onClick={(async () => {
            setUrl('/quests')
            setConnectMenuToggled(true)
          })} className={
          ["button", "gold", styles["nq-button"]].join(" ")} >
          <div className="line">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
          </svg>
            <p>
              View quests
            </p>
          </div>
        </button>
        <button onClick={(async () => {
            setUrl('/getrole')
            setConnectMenuToggled(true)
          })} className={
          ["button", "normal", styles["nq-button"]].join(" ")} >
          <div className="line">
            <p>
              Get role
            </p>
          </div>
        </button>
        </div>
      </nav>
    </div>
  );
}