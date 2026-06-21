import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "public", "images");
mkdirSync(outputDir, { recursive: true });

const images = [
  ["hero-villa.jpg", "Villa / Pool"],
  ["renovation-villa.jpg", "Renovation Villas"],
  ["menuiserie.jpg", "Menuiserie"],
  ["cuisine.jpg", "Cuisine Premium"],
  ["liftbar.jpg", "Lift Bar"],
  ["bureau.jpg", "Bureau"],
  ["piscine.jpg", "Piscine"],
  ["smart-home.jpg", "Smart Home"],
  ["securite.jpg", "Securite"],
  ["climatisation.jpg", "Climatisation"],
  ["solaire.jpg", "Solaire"],
  ["marrakech.jpg", "Marrakech"],
];

const width = 1600;
const height = 1100;

function clamp(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function renderPpm(label, index) {
  const base = [
    [28, 28, 26],
    [184, 146, 95],
    [216, 198, 173],
    [244, 239, 231],
  ];
  const accent = base[(index % (base.length - 1)) + 1];
  let body = `P3\n${width} ${height}\n255\n`;

  for (let y = 0; y < height; y += 1) {
    const row = [];
    for (let x = 0; x < width; x += 1) {
      const nx = x / width;
      const ny = y / height;
      const vignette = Math.hypot(nx - 0.5, ny - 0.5) * 0.62;
      const sun = Math.max(0, 1 - Math.hypot(nx - 0.72, ny - 0.26) * 2.2);
      const line = Math.abs(ny - (0.34 + nx * 0.16)) < 0.0025 ? 34 : 0;
      const courtyard = x > width * 0.14 && x < width * 0.86 && y > height * 0.2 && y < height * 0.82;
      const frame = courtyard && (x < width * 0.155 || x > width * 0.845 || y < height * 0.215 || y > height * 0.805) ? 42 : 0;
      const bronze = sun * 52 + line + frame;
      const ivory = (1 - ny) * 26 + sun * 44;
      const charcoal = 18 + vignette * 74;
      const r = clamp(charcoal + bronze * (accent[0] / 255) + ivory);
      const g = clamp(charcoal + bronze * (accent[1] / 255) + ivory * 0.9);
      const b = clamp(charcoal + bronze * (accent[2] / 255) + ivory * 0.72);
      row.push(`${r} ${g} ${b}`);
    }
    body += `${row.join(" ")}\n`;
  }

  return body;
}

for (const [fileName, label] of images) {
  const ppmPath = join(outputDir, `${fileName}.ppm`);
  const jpgPath = join(outputDir, fileName);
  writeFileSync(ppmPath, renderPpm(label, images.findIndex(([name]) => name === fileName)));
  execFileSync("sips", ["-s", "format", "jpeg", ppmPath, "--out", jpgPath], { stdio: "ignore" });
  unlinkSync(ppmPath);
}
