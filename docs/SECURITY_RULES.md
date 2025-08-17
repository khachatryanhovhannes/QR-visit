# Firestore & Supabase Security Rules

## Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      // Allow public read access for profile pages (needed for public profiles)
      allow read: if true;
      // Allow username availability checks (read-only queries)
      allow read: if request.auth != null;
    }
    // Default rule - deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Supabase Storage Policies

- Buckets: `avatars`, `qr-codes`
- Public READ for all objects
- INSERT/UPDATE/DELETE only if `auth.uid() == object.owner`

Example policy (SQL):

```
-- Public read
SELECT: true
-- Secure write
INSERT/UPDATE/DELETE: auth.uid() = object.owner
```

## Setup Steps

1. Go to Firestore/Supabase console
2. Set rules/policies as above
3. Test with authenticated and unauthenticated users

## Notes
- Never expose service role keys to client.
- Test uploads and profile access for security.
