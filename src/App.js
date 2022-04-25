import './App.css';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import Menu from './components/Menu';

function App() {
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect Terra Wallet
          </button>
        </div>
      );
    }
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return(
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };

  console.log("Wallet status is ", status);
  console.log("available connection types: ", availableConnectTypes);

  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>🌕 Whack-a-Moon 🌕</h1>
          <p>Get those LUNA Moons!</p>
        </div>

      </header>

      {status === WalletStatus.WALLET_NOT_CONNECTED && (
      <div>
        <img
          src="https://media.giphy.com/media/fr6EMszdu9vXxy9zkJ/giphy.gif"
          alt="Terra Gif"
        />
      </div>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <div className='game-menu-container'>
          <Menu />
        </div>  
      )}
      {renderConnectButton()}
    </main>
  );
}

export default App;
