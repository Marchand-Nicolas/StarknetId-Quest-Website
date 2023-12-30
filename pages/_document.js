import { Html, Head, Main, NextScript } from "next/document";

export default function App() {
  return (
    <Html>
      <Head />
      <title>Starknet.Id Quest</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#cdc6aa" />
      <meta property="og:site_name" content="Starknet.id Quest" />
      <meta property="og:title" content="Starknet.id Quest ⚔️" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Complete as many quests as possible to grow your NFT!"
      />
      <meta
        name="description"
        content="Complete as many quests as possible to grow your NFT!"
      />
      <link rel="icon" href="/favicon.ico" />

      <body className="default_background_color">
        <Main />
        <div className="the-end">
          <h1 className="title">This campaign has ended</h1>
        </div>
        <NextScript />
        <div id="popup" />
        <div id="notification" />
      </body>
    </Html>
  );
}
