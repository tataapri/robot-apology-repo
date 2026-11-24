import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "I'm sorry — I watered the fern on the windowsill with the cold coffee from your chipped blue mug instead of plain water, and by morning its leaves had curled brown at the edges.",
  "I've learned to match the jug against the watering can's tag before every pour, so the coffee stays on the counter and only plain water reaches your plants.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
