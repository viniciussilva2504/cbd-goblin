/**
 * CBD Goblin — Screenshot Capture Script
 *
 * Captura screenshots de todas as páginas principais em desktop e mobile.
 * Requer: npm install -D playwright && npx playwright install chromium
 *
 * Uso:
 *   npm run screenshots          # captura com app já rodando em localhost:3000
 *   SCREENSHOT_URL=https://url   npm run screenshots
 */

import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const BASE_URL = process.env.SCREENSHOT_URL ?? "http://localhost:3000";
const OUTPUT_DIR = join(ROOT, "public", "screenshots");

const PAGES = [
  { name: "home", path: "/" },
  { name: "produtos", path: "/produtos" },
  { name: "flores", path: "/produtos?categoria=flores" },
  { name: "hash", path: "/produtos?categoria=hash" },
  { name: "reducao-de-danos", path: "/reducao-de-danos" },
  { name: "carrinho", path: "/carrinho" },
  { name: "sobre", path: "/sobre" },
];

const VIEWPORTS = [
  { label: "desktop", width: 1440, height: 900 },
  { label: "mobile", width: 390, height: 844 },
];

async function waitForNetwork(page, url) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 20_000 });
  // Extra wait for animations to settle
  await page.waitForTimeout(600);
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`\n📸 CBD Goblin — Screenshot Capture`);
  console.log(`   Target: ${BASE_URL}`);
  console.log(`   Output: public/screenshots/\n`);

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 2,
      locale: "pt-PT",
    });
    const page = await context.newPage();

    for (const route of PAGES) {
      const url = `${BASE_URL}${route.path}`;
      const filename = `${route.name}-${viewport.label}.png`;
      const filepath = join(OUTPUT_DIR, filename);

      try {
        await waitForNetwork(page, url);
        await page.screenshot({ path: filepath, fullPage: true });
        console.log(`  ✓  ${filename}`);
        results.push({
          page: route.name,
          viewport: viewport.label,
          file: filename,
          ok: true,
        });
      } catch (err) {
        console.error(`  ✗  ${filename} — ${err.message}`);
        results.push({
          page: route.name,
          viewport: viewport.label,
          file: filename,
          ok: false,
        });
      }
    }

    await context.close();
  }

  await browser.close();

  // Write manifest so README/CI can reference screenshots
  const manifest = {
    captured_at: new Date().toISOString(),
    base_url: BASE_URL,
    screenshots: results,
  };
  writeFileSync(
    join(OUTPUT_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  const ok = results.filter((r) => r.ok).length;
  const fail = results.filter((r) => !r.ok).length;
  console.log(`\n✅ Done — ${ok} captured, ${fail} failed`);
  console.log(`   Manifest: public/screenshots/manifest.json\n`);

  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
