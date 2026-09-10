# Polymarket analytics

Read-only feature layer for Polymarket books: mid, spread, depth, and inventory-style imbalance. No private keys. Use it to feed [polymarket-trading-bot](https://github.com/antonkarasbiz/polymarket-trading-bot) and [polymarket-market-maker](https://github.com/antonkarasbiz/polymarket-market-maker).

Gamma / CLOB public endpoints can be attached in `src/` without changing the metric contract.

```bash
npm install
npm test
npm run dev
```

MIT. Maintained by [Anton Karas](https://github.com/antonkarasbiz).
