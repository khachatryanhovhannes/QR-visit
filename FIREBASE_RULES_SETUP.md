# Firebase Security Rules Setup Guide

## Current Status
Your Firebase integration is working correctly based on the network requests:
- ✅ Authentication: Valid JWT tokens
- ✅ Firestore: Active connection established
- ✅ Storage: QR code uploads working


## Required Security Rules

### 1. Firestore Security Rules

Go to your Firebase Console → Firestore Database → Rules and set:

```javascript
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


### 2. Firebase Storage Security Rules

Go to your Firebase Console → Storage → Rules and set:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can upload/read their own QR codes and avatars
    match /qr-codes/{userId}.png {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /avatars/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    // Public read access for QR codes and avatars (for public profiles)
    match /qr-codes/{allPaths=**} {
      allow read: if true;
    }
    match /avatars/{allPaths=**} {
      allow read: if true;
    }
  }
}
```


## Deployment Steps

1. **Open Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: qr-visit-website
3. **Set Firestore Rules**:
  - Go to Firestore Database → Rules
  - Replace the rules with the ones above
  - Click "Publish"
4. **Set Storage Rules**:
  - Go to Storage → Rules
  - Replace the rules with the ones above
  - Click "Publish"

## Testing After Rules Deployment

After deploying the rules, test your profile operations again using the debug page at:
http://localhost:3000/debug

The operations should work without any permission errors.
