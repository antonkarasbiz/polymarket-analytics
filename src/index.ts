import { measureBook } from "./signals.ts";

const metrics = measureBook(
  [
    { price: 0.49, size: 120 },
    { price: 0.48, size: 90 },
  ],
  [
    { price: 0.51, size: 110 },
    { price: 0.52, size: 70 },
  ],
);

console.log(JSON.stringify({ venue: "polymarket", metrics }));
