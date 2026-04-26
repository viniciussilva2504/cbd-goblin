/**
 * CBD Goblin — Screenshot Capture Script
 *
 * Captura screenshots de todas as páginas principais em desktop e mobile.
 * Requer: npm install -D playwright && npx playwright install chromium
 *
 * Uso:
 *   npm run screenshots                        # arranca o servidor automaticamente
 *   SCREENSHOT_URL=https://url npm run screenshots  # usa URL externa (sem servidor local)
 */

import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const EXTERNAL_URL = process.env.SCREENSHOT_URL;
const BASE_URL = EXTERNAL_URL ?? "http://localhost:3000";
const OUTPUT_DIR = join(ROOT, "public", "screenshots");
const PORT = 3000;

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
  await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
  // Extra wait for animations to settle
  await page.waitForTimeout(600);
}

/** Verifica se localhost:PORT já está a responder */
async function isServerUp() {
  try {
    const res = await fetch(`http://localhost:${PORT}`, {
      signal: AbortSignal.timeout(2000),
    });
    return res.ok || res.status < 500;
  } catch {
    return false;
  }
}

/** Aguarda até o servidor estar pronto (max ~60s) */
async function waitForServer(maxMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    if (await isServerUp()) return true;
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`\n📸 CBD Goblin — Screenshot Capture`);
  console.log(`   Target: ${BASE_URL}`);
  console.log(`   Output: public/screenshots/\n`);

  // Se não foi fornecida URL externa, arrancar o servidor local se necessário
  let serverProc = null;
  if (!EXTERNAL_URL) {
    if (await isServerUp()) {
      console.log("   ℹ️  Servidor já está a correr em localhost:" + PORT);
    } else {
      console.log("   🚀 A arrancar o servidor Next.js (modo dev)...");
      // Usa dev server — não requer build prévia
      serverProc = spawn("npm", ["run", "dev"], {
        cwd: ROOT,
        shell: true,
        stdio: "pipe",
      });
      serverProc.stderr.on("data", (d) => process.stderr.write(d));

      const ready = await waitForServer(90_000);
      if (!ready) {
        serverProc.kill();
        console.error(
          "   ❌ Servidor não respondeu em 90s. Corre 'npm run build' primeiro.",
        );
        process.exit(1);
      }
      console.log("   ✅ Servidor pronto em localhost:" + PORT + "\n");
    }
  }

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
  if (serverProc) serverProc.kill();

  // Escreve manifest
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
