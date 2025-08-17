# QR Visit Deployment Guide

## Vercel
1. Connect GitHub repo to Vercel
2. Set all required env vars from .env.example
3. Configure build: `npm run build`
4. Enable SSL for production domain

## Firebase
1. Enable Email/Password Auth
2. Set Firestore rules (see SECURITY_RULES.md)
3. Add authorized domains for Auth

## Supabase
1. Create buckets: avatars, qr-codes
2. Set public read, secure write policies
3. Add keys to env vars

## Final Steps
- Test all flows (signup, profile, avatar, QR)
- Confirm public profiles load with SEO
- Check error pages and rate limiting
- Review docs and changelog
