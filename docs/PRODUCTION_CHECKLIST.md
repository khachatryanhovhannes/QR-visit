# QR Visit Production Launch Checklist

## 1. Environment & Config
- [x] All required env vars set in Vercel/Firebase/Supabase
- [x] .env.local and .env.production are complete
- [x] No secrets exposed to client

## 2. Firebase
- [x] Email/Password Auth enabled
- [x] Firestore DB in production mode
- [x] Security rules: public read, authenticated write

## 3. Supabase
- [x] Buckets created: avatars, qr-codes
- [x] Policies: public read, secure write

## 4. Features
- [x] All templates selectable
- [x] All services CRUD and public
- [x] All premium socials usable
- [x] QR generation stable and saved
- [x] Username availability safe
- [x] Avatar upload/preview/fallback
- [x] SEO metadata dynamic

## 5. Production Readiness
- [x] sitemap.xml, robots.txt, canonical URLs
- [x] Custom 404, 500, error boundary
- [x] Rate limiting for signup/profile update
- [x] Image optimization
- [x] Accessibility: aria labels

## 6. Deployment
- [x] Vercel: repo connected, env vars set, SSL enabled
- [x] Firebase: authorized domains
- [x] Supabase: buckets, policies, keys

## 7. Docs
- [x] Security rules documented
- [x] Deployment guide written
- [x] Upgrade notes for Pro features
- [x] Changelog updated

## 8. Testing
- [x] Signup/login/profile/QR/avatar flows tested
- [x] Public profile loads with SEO tags
- [x] Pro features unlocked
- [x] Invalid URLs show 404
- [x] Unauthorized edits/uploads fail
- [x] Avatars/QRs load fast

## 9. Acceptance
- [x] Project builds cleanly
- [x] Lint passes
- [x] All features unlocked
- [x] Security rules enforced
- [x] Docs complete
- [x] Billing can be re-enabled via hasProAccess
