import { useEffect, useState } from 'react';
import { getCoins } from '../lib/zora';
import { connectWallet } from '../lib/wallet';
import { TokenCard } from '../components/TokenCard';

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    async function init() {
      const w = await connectWallet();
      setWallet(w);
      const data = await getCoins();
      setCoins(data);
    }
    init();
  }, []);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Coin Creator</h1>
      {wallet && <p className="text-sm text-gray-500">Connected: {wallet.address}</p>}
      {coins.length === 0 ? (
        <p>Loading...</p>
      ) : (
        coins.map((c, i) => (
          <TokenCard
            key={i}
            {...c}
            onBuy={() => fetch('/api/webhook', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({trustedData:{fid:wallet.address},untrustedData:{buttonIndex:1,inputText:c.address}})})}
            onSell={() => fetch('/api/webhook', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({trustedData:{fid:wallet.address},untrustedData:{buttonIndex:2,inputText:c.address}})})}
            onWatch={() => fetch('/api/webhook', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({trustedData:{fid:wallet.address},untrustedData:{buttonIndex:3,inputText:c.address}})})}
            onUnwatch={() => fetch('/api/webhook', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({trustedData:{fid:wallet.address},untrustedData:{buttonIndex:4,inputText:c.address}})})}
          />
        ))
      )}
    </div>
  );
}