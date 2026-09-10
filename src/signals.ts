export type BookLevel = { price: number; size: number };

export type BookMetrics = {
  mid: number;
  spread: number;
  imbalance: number;
  depthUsd: number;
};

export function measureBook(bids: BookLevel[], asks: BookLevel[]): BookMetrics {
  const bestBid = bids[0];
  const bestAsk = asks[0];
  if (!bestBid || !bestAsk) {
    throw new Error("book is missing a top of book");
  }
  const bidDepth = bids.reduce((sum, level) => sum + level.price * level.size, 0);
  const askDepth = asks.reduce((sum, level) => sum + level.price * level.size, 0);
  return {
    mid: (bestBid.price + bestAsk.price) / 2,
    spread: bestAsk.price - bestBid.price,
    imbalance: (bidDepth - askDepth) / (bidDepth + askDepth || 1),
    depthUsd: bidDepth + askDepth,
  };
}
