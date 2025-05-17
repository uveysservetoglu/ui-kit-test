#!/usr/bin/env node

import { mkdirSync, existsSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const component = process.argv[2]; // card/news-card
if (!component) {
  console.error(
    "⚠️  Lütfen bir bileşen adı girin. Örnek: npx ui-kit-test card/news-card"
  );
  process.exit(1);
}

const srcPath = join(__dirname, "components", component + ".tsx");
const destPath = join(process.cwd(), "components", component + ".tsx");

const destDir = dirname(destPath);
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

try {
  copyFileSync(srcPath, destPath);
  console.log(`✅ ${component} başarıyla kopyalandı!`);
} catch (e) {
  console.error("❌ Dosya kopyalanamadı:", e.message);
}
