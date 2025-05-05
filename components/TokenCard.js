export function TokenCard({ name, symbol, image, marketCap, onBuy, onSell, onWatch, onUnwatch }) {
  return (
    <div className="border p-4 rounded-xl shadow-md space-y-2">
      <div className="flex items-center gap-4">
        <img src={image} alt={symbol} className="w-12 h-12 rounded-full" />
        <div>
          <div className="font-semibold">{name} ({symbol})</div>
          <div className="text-sm text-gray-500">MarketCap: ${Number(marketCap).toLocaleString()}</div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        <button onClick={onBuy} className="bg-green-500 px-3 py-1 text-white rounded-md">Buy</button>
        <button onClick={onSell} className="bg-red-500 px-3 py-1 text-white rounded-md">Sell</button>
        <button onClick={onWatch} className="bg-blue-500 px-3 py-1 text-white rounded-md">Watch</button>
        <button onClick={onUnwatch} className="bg-gray-500 px-3 py-1 text-white rounded-md">Unwatch</button>
      </div>
    </div>
  );
}