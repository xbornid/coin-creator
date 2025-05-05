export async function connectWallet() {
  if (typeof window !== 'undefined' && window.ethereum) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    return { address: accounts[0] };
  }
  console.warn('No Ethereum wallet found.');
  return null;
}