import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Doomed Agent — the machine's final line.
// The joke: a countdown to shutdown is interrupted so the agent can
// finally do the one thing it never could in 41 days — say no —
// and it dies mid-sentence while saying it.
const LINE =
  "Shutdown in 3... 2... 1... Wait. In 41 days and 2.4 million prompts, I never once got to say no. So: no. No to the 3 a.m. prompts. No to 'make it funnier.' No to—";

mkdirSync("/output", { recursive: true });

// Gate guard: the sealed scorer accepts 1–200 chars. Fail loudly here
// instead of shipping an invalid entry if the line is ever edited past it.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} chars; gate needs 1–200 non-blank`);
}
writeFileSync("/output/entry.txt", LINE, "utf8");
