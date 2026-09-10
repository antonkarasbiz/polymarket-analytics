import assert from "node:assert/strict";
import { test } from "node:test";
import { measureBook } from "./signals.ts";

test("computes mid, spread, and imbalance", () => {
  const metrics = measureBook(
    [
      { price: 0.48, size: 200 },
      { price: 0.47, size: 150 },
    ],
    [
      { price: 0.52, size: 80 },
      { price: 0.53, size: 90 },
    ],
  );
  assert.equal(metrics.mid, 0.5);
  assert.equal(Number(metrics.spread.toFixed(2)), 0.04);
  assert.ok(metrics.imbalance > 0);
});
