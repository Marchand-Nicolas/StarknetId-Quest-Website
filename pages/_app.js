import { InjectedConnector, StarknetProvider } from '@starknet-react/core'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({ options: { id: "argentX" } }),
    new InjectedConnector({ options: { id: "braavos" } }),
  ];

  return (<StarknetProvider connectors={connectors}>
  <Component {...pageProps} />
</StarknetProvider>)
}

export default App
