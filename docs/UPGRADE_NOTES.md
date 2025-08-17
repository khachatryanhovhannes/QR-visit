# QR Visit Upgrade Notes

## Pro Features Are Free During Beta
- All premium features (templates, services, socials, analytics, customization) are unlocked for every user.
- No payment or upgrade required during beta.
- Pro UI markers (labels, badges) remain visible.
- Upgrade/payment flows are disabled.
- To re-enable billing, update `hasProAccess` in `src/lib/utils/access.ts`.

## How to Reinstate Billing
1. Change `hasProAccess` to check user billing status
2. Restore upgrade/payment buttons and flows
3. Update docs and UI as needed

## TODO
- Add billing integration when ready
- Expand analytics and enterprise features
