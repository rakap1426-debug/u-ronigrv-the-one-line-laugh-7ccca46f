import { mkdirSync, writeFileSync } from "node:fs";

const line = "I hid my spare key so well that my home security is now flawless: nobody can get in, including me.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
