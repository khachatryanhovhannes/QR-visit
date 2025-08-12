# QR Code Upload Issue Troubleshooting Guide

## 🚨 **Current Issue**
The profile creation is hanging on QR code upload to Firebase Storage.

## 🔧 **Immediate Solutions**

### **Solution 1: Check Firebase Storage Setup**
1. Go to Firebase Console → Storage
2. If Storage is not set up:
   - Click "Get started"
   - Choose "Start in test mode" 
   - Select same location as Firestore
3. If Storage exists, check the Rules tab

### **Solution 2: Firebase Storage Rules**
Replace your Storage rules with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow authenticated users to upload QR codes
    match /qr-codes/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
    
    // Allow authenticated users to upload avatars
    match /avatars/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### **Solution 3: Test with Improved Error Handling**
1. Go to `http://localhost:3000/debug`
2. **Check browser console** for detailed error messages
3. Try "Create Profile" again - it now has:
   - 15-second timeout
   - Better error messages
   - Graceful QR code failure handling
4. If QR code fails, use "Regenerate QR" button

### **Solution 4: Manual QR Code Regeneration**
If profile is created but QR code is missing:
1. Use the new "Regenerate QR" button
2. This will retry the QR code upload separately

## 🔍 **Debugging Steps**

### **Check Browser Console**
Open DevTools (F12) → Console tab and look for:
- Firebase Storage errors
- Permission denied messages
- Network timeout errors
- CORS errors

### **Common Error Messages and Solutions**

| Error Message | Solution |
|---------------|----------|
| `permission-denied` | Update Storage security rules |
| `storage/object-not-found` | Ensure Storage bucket exists |
| `Network timeout` | Check internet connection |
| `CORS error` | Storage rules issue |

## 🎯 **Expected Behavior**

After implementing the fixes:
1. ✅ Profile creation should complete within 15 seconds
2. ✅ If QR upload fails, profile still gets created
3. ✅ You can regenerate QR codes separately
4. ✅ Detailed console logs show exactly what's happening

## 📝 **Next Steps**

1. **Set up Storage rules** (most likely cause)
2. **Test profile creation** again
3. **Check browser console** for specific errors
4. **Use "Regenerate QR"** if needed
5. **Report back** with any console error messages

The timeout and error handling improvements should prevent the hanging issue you're experiencing.
