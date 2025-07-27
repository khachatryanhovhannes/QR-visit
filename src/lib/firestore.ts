import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  Timestamp 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { UserProfile, UserFormData } from '@/types';
import QRCode from 'qrcode';

// User profile operations
export async function createUserProfile(uid: string, data: UserFormData): Promise<void> {
  try {
    // Check if username is available
    const isAvailable = await checkUsernameAvailability(data.username);
    if (!isAvailable) {
      throw new Error('Username is already taken');
    }

    let avatarUrl = '';
    let qrCodeUrl = '';

    // Upload avatar if provided
    if (data.avatar) {
      avatarUrl = await uploadFile(data.avatar, `avatars/${uid}`);
    }

    // Generate and upload QR code
    const profileUrl = `${process.env.NEXT_PUBLIC_APP_URL}/u/${data.username}`;
    qrCodeUrl = await generateAndUploadQRCode(profileUrl, uid);

    const userProfile: UserProfile = {
      uid,
      username: data.username,
      fullName: data.fullName,
      bio: data.bio,
      avatarUrl,
      qrCodeUrl,
      template: data.template,
      contact: data.contact,
      links: data.links,
      premiumSocials: data.premiumSocials,
      services: data.services,
      isPremium: false, // Default to free tier
      createdAt: Timestamp.now(),
    };

    await setDoc(doc(db, 'users', uid), userProfile);
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
}

export async function getUserProfileByUsername(username: string): Promise<UserProfile | null> {
  try {
    const q = query(
      collection(db, 'users'),
      where('username', '==', username)
    );
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return doc.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile by username:', error);
    throw error;
  }
}

export async function updateUserProfile(uid: string, data: Partial<UserFormData>): Promise<void> {
  try {
    const docRef = doc(db, 'users', uid);
    
    // Handle avatar upload if new file provided
    const updateData: Record<string, unknown> = { ...data };
    if (data.avatar) {
      updateData.avatarUrl = await uploadFile(data.avatar, `avatars/${uid}`);
      delete updateData.avatar;
    }

    // Regenerate QR code if username changed
    if (data.username) {
      const profileUrl = `${process.env.NEXT_PUBLIC_APP_URL}/u/${data.username}`;
      updateData.qrCodeUrl = await generateAndUploadQRCode(profileUrl, uid);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await updateDoc(docRef, updateData as any);
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}

export async function deleteUserProfile(uid: string): Promise<void> {
  try {
    // Delete profile document
    await deleteDoc(doc(db, 'users', uid));
    
    // Clean up storage files
    try {
      await deleteObject(ref(storage, `avatars/${uid}`));
      await deleteObject(ref(storage, `qr-codes/${uid}.png`));
    } catch (storageError) {
      // Files might not exist, ignore errors
      console.warn('Error deleting storage files:', storageError);
    }
  } catch (error) {
    console.error('Error deleting user profile:', error);
    throw error;
  }
}

// Username availability check
export async function checkUsernameAvailability(username: string): Promise<boolean> {
  try {
    const q = query(
      collection(db, 'users'),
      where('username', '==', username)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  } catch (error) {
    console.error('Error checking username availability:', error);
    throw error;
  }
}

// File upload utility
export async function uploadFile(file: File, path: string): Promise<string> {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

// QR Code generation and upload
export async function generateAndUploadQRCode(url: string, uid: string): Promise<string> {
  try {
    // Generate QR code as data URL
    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      width: 512,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });

    // Convert data URL to blob
    const response = await fetch(qrCodeDataUrl);
    const blob = await response.blob();
    
    // Upload to Firebase Storage
    const storageRef = ref(storage, `qr-codes/${uid}.png`);
    const snapshot = await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error generating and uploading QR code:', error);
    throw error;
  }
}
