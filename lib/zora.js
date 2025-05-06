import { getCoinsQuery } from '@zoralabs/coins-sdk';
import { getDefaultProvider } from 'ethers';

const provider = getDefaultProvider('https://mainnet.base.org');

export async function getCoins() {
  const coins = await getCoinsQuery({
    provider,
    sortBy: 'marketCap',
    limit: 10,
  });
  return coins.map(c => ({
    name: c.name,
    symbol: c.symbol,
    address: c.address,
    image: c.image,
    marketCap: c.marketCap,
  }));
}
