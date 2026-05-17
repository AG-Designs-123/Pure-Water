set -euo pipefail

# Merge the improved preview files from the accidental nested copy into the real app.
cp server/client/src/App.tsx client/src/App.tsx
cp server/client/src/pages/Home.tsx client/src/pages/Home.tsx
cp server/client/src/pages/LegalPage.tsx client/src/pages/LegalPage.tsx
cp server/client/src/components/Hero.tsx client/src/components/Hero.tsx
cp server/client/src/components/Enquiry.tsx client/src/components/Enquiry.tsx
cp server/client/src/components/Footer.tsx client/src/components/Footer.tsx
cp server/client/src/components/Payment.tsx client/src/components/Payment.tsx
cp server/client/src/components/TrustBar.tsx client/src/components/TrustBar.tsx
cp server/client/src/components/ResultsGallery.tsx client/src/components/ResultsGallery.tsx
cp -R server/client/public/* client/public/

# Remove accidental nested project copies and temporary approval files.
rm -rf server/client server/server server/shared server/script
rm -f server/package.json server/package-lock.json server/tsconfig.json server/vite.config.ts \
      server/components.json server/postcss.config.js server/drizzle.config.ts server/replit.md
rm -f "server/pure-water-preview-fixed-for-approval (2).zip" server/REQUESTED_CHANGES.patch \
      pure-water-small.zip website.zip

# Fix TypeScript errors surfaced by the cleaned repo.
python3 - <<'INNER'
from pathlib import Path

p = Path('server/index.ts')
s = p.read_text()
s = s.replace('await runMigrations({ databaseUrl, schema: "stripe" });', 'await runMigrations({ databaseUrl });')
p.write_text(s)

p = Path('server/routes.ts')
s = p.read_text()
s = s.replace('sendEnquiryEmail(parsed.data).catch((err) => {', 'sendEnquiryEmail({ ...parsed.data, message: parsed.data.message ?? "" }).catch((err) => {')
p.write_text(s)
INNER

npm install
npm run check
npm run build

git status --short
