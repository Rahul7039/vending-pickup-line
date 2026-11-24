// vending-pickup-line: one pickup line, spoken by a vending machine.
// The program writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Is your name A7? Because I've been trying to drop you for weeks, and you still won't fall for me.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
// Fail loudly here rather than write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
