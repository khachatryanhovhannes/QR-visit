# Firebase Firestore Setup Guide

## 🔥 Issue: "Failed to get document because the client is offline"

This error typically occurs due to **Firestore Security Rules** being too restrictive or not configured properly.

## 🚀 Solution: Configure Firestore Security Rules

### Step 1: Access Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **qr-visit-website**
3. Navigate to **Firestore Database** in the left sidebar
4. Click the **Rules** tab

### Step 2: Update Security Rules
Copy the rules from `firestore.rules` file in your project root and paste them into the Firebase Console rules editor.

### Step 3: Test the Rules
1. After publishing the rules, refresh your application
2. Try signing in and using the Firestore features
3. Use the **Firestore Connectivity Test** component to verify everything works

## 🧪 Debug Components Added

To help diagnose and fix Firestore issues, I've added these debug components to your homepage:

1. **FirebaseDebug** - Shows Firebase configuration status
2. **AuthTest** - Tests authentication functionality  
3. **AuthMethodsTest** - Verifies Email/Password auth is enabled
4. **FirebaseAuthDiagnostic** - Detailed authentication diagnostics
5. **FirestoreConnectivityTest** - Tests Firestore read/write operations

## 🧹 Removing Debug Components (After Testing)

Once everything is working, remove these debug components:

### 1. Remove debug imports from `src/app/page.tsx`:
```tsx
// Remove these lines:
import { FirebaseDebug } from '@/components/debug/FirebaseDebug';
import { AuthTest } from '@/components/debug/AuthTest';
import { FirebaseAuthDiagnostic } from '@/components/debug/FirebaseAuthDiagnostic';
import { AuthMethodsTest } from '@/components/debug/AuthMethodsTest';
import { FirestoreConnectivityTest } from '@/components/debug/FirestoreConnectivityTest';
```

### 2. Remove debug section from JSX:
```tsx
// Remove this entire section:
{/* Debug Section - Remove this in production */}
<section className="px-4 pt-20 pb-8 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <!-- All debug components -->
  </div>
</section>
```

### 3. Restore original hero section:
```tsx
// Change back to:
<section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8">
```

### 4. Delete debug component files:
- `src/components/debug/FirebaseDebug.tsx`
- `src/components/debug/AuthTest.tsx`
- `src/components/debug/FirebaseAuthDiagnostic.tsx`
- `src/components/debug/AuthMethodsTest.tsx`
- `src/components/debug/FirestoreConnectivityTest.tsx`

## 🎯 Expected Results After Fix

After configuring Firestore rules properly:
- ✅ Authentication works (already working)
- ✅ Firestore read/write operations work
- ✅ User profiles can be created and retrieved
- ✅ No more "client is offline" errors

## 📚 Next Steps

1. **Set up Firestore rules** using the provided template
2. **Test connectivity** using the debug components
3. **Remove debug components** once everything works
4. **Continue building** your QR Visit application features
