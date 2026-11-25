import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "My bank account is currently playing a thrilling game of hide and seek, except it's hiding and I'm seeking a second job.";
const output = "/output/entry.txt";

if (text.length < 1 || text.length > 140 || /[\r\n]/.test(text)) {
  throw new Error("Entry does not satisfy the text gate");
}

mkdirSync("/output", { recursive: true });
const expected = Buffer.from(`${text}\n`, "utf8");
writeFileSync(output, expected);
if (!readFileSync(output).equals(expected)) {
  throw new Error("Written entry does not match expected text");
}
