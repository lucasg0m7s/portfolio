import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean);

const chrome = candidates.find((path) => existsSync(path));
if (!chrome) {
  console.error("Chrome não encontrado. Defina CHROME_PATH.");
  process.exit(1);
}

const template = pathToFileURL(fileURLToPath(new URL("./og.html", import.meta.url))).href;
const output = fileURLToPath(new URL("../public/og.png", import.meta.url));

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--allow-file-access-from-files",
  "--window-size=1200,630",
  `--screenshot=${output}`,
  template,
]);
console.log(`Imagem gerada em ${output}`);
