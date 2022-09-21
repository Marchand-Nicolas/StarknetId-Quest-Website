import { useState, useEffect } from "react";
import { useConnectors, useStarknet } from '@starknet-react/core'
import styles from '../styles/Home.module.css'
import React from 'react'
import Powered from '../components/powered'
import WalletMenu from '../components/walletmenu.js'
import { useRouter } from 'next/router'
import { getCookie } from "../functions";
import Common from "../components/common";

export default function Home() {;
  const [connectMenuToggled, setConnectMenuToggled] = useState(false);
  const { connect, connectors } = useConnectors()
  const { account } = useStarknet()
  const router = useRouter()
  
  return (
  <div className="default_background">
    <Common account={account} />
    {connectMenuToggled ? <WalletMenu hasWallet={false} closeWallet={null} close={() => setConnectMenuToggled(false)} /> : null}
    <nav className={styles.nav}>
    {
      /*<div className={styles.background} />
      <div className={styles.logo_banner}/>*/
    }
    <h1 className="title v2">STARKNET.ID</h1>
      <button onClick={(async () => {
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
      </nav>
    </div>
  );
}