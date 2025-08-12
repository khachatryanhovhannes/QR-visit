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
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { supabase } from "@/lib/supabaseClient";
import { UserProfile, UserFormData } from "@/types";
import QRCode from "qrcode";

// Create user profile
export async function createUserProfile(
  uid: string,
  data: UserFormData
): Promise<void> {
  try {
    const isAvailable = await checkUsernameAvailability(data.username, uid);
    if (!isAvailable) throw new Error("Username is already taken");

    let avatarUrl = "";
    let qrCodeUrl = "";

    if (data.avatar) {
      avatarUrl = await uploadFile(data.avatar, `avatars/${uid}`);
    }

    const profileUrl = `${
      process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    }/u/${data.username}`;

    try {
      qrCodeUrl = await generateAndUploadQRCode(profileUrl, uid);
    } catch {
      qrCodeUrl = "";
    }

    const userProfile: UserProfile = {
      uid,
      username: data.username,
      fullName: data.fullName || "",
      bio: data.bio || "",
      avatarUrl,
      qrCodeUrl,
      template: data.template || "",
      contact: data.contact || {},
      links: data.links || [],
      premiumSocials: data.premiumSocials || [],
      services: data.services || [],
      isPremium: false,
      createdAt: Timestamp.now(),
    };

    await setDoc(doc(db, "users", uid), userProfile);
  } catch (error) {
    console.error("❌ Error creating user profile:", error);
    throw error;
  }
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? (docSnap.data() as UserProfile) : null;
}

export async function getUserProfileByUsername(
  username: string
): Promise<UserProfile | null> {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data() as UserProfile;
  }
  return null;
}

export async function updateUserProfile(
  uid: string,
  data: Partial<UserFormData>
): Promise<void> {
  try {
    const docRef = doc(db, "users", uid);

    const updateData: Record<string, unknown> = { ...data };

    if (data.avatar) {
      updateData.avatarUrl = await uploadFile(data.avatar, `avatars/${uid}`);
      delete updateData.avatar;
    }

    // Default values for arrays/objects on update if provided as undefined
    if (data.premiumSocials === undefined) updateData.premiumSocials = [];
    if (data.services === undefined) updateData.services = [];

    // Remove undefined fields (Firestore doesn't accept undefined)
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    if (data.username) {
      const profileUrl = `${process.env.NEXT_PUBLIC_APP_URL}/u/${data.username}`;
      updateData.qrCodeUrl = await generateAndUploadQRCode(profileUrl, uid);
    }

    await updateDoc(docRef, updateData as any);
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}

export async function regenerateQRCode(uid: string): Promise<string> {
  const profile = await getUserProfile(uid);
  if (!profile) throw new Error("Profile not found");

  const profileUrl = `${
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  }/u/${profile.username}`;

  const qrCodeUrl = await generateAndUploadQRCode(profileUrl, uid);
  const docRef = doc(db, "users", uid);
  await updateDoc(docRef, { qrCodeUrl });

  return qrCodeUrl;
}

export async function deleteUserProfile(uid: string): Promise<void> {
  await deleteDoc(doc(db, "users", uid));
  try {
    await supabase.storage
      .from("qr-codes")
      .remove([`avatars/${uid}.png`, `qr/${uid}.png`]);
  } catch (storageError) {
    console.warn("Error deleting storage files:", storageError);
  }
}

export async function checkUsernameAvailability(
  username: string,
  excludeUid?: string
): Promise<boolean> {
  const qy = query(collection(db, "users"), where("username", "==", username));
  const snap = await getDocs(qy);
  if (snap.empty) return true;
  if (excludeUid) {
    const others = snap.docs.filter((d) => d.id !== excludeUid);
    return others.length === 0;
  }
  return false;
}

// Upload file to Supabase Storage
export async function uploadFile(file: File, path: string): Promise<string> {
  try {
    const ext = file.name.split(".").pop() || "png";
    const cleanPath = `${path}.${ext}`;

    const { error } = await supabase.storage
      .from("qr-codes")
      .upload(cleanPath, file, {
        contentType: file.type || "application/octet-stream",
        upsert: true,
      });

    if (error) throw error;

    const { data: publicUrl } = supabase.storage
      .from("qr-codes")
      .getPublicUrl(cleanPath);

    return publicUrl.publicUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

// Generate and upload QR code to Supabase Storage
export async function generateAndUploadQRCode(
  url: string,
  uid: string
): Promise<string> {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      width: 512,
      margin: 2,
      color: { dark: "#000000", light: "#FFFFFF" },
    });

    const response = await fetch(qrCodeDataUrl);
    const blob = await response.blob();

    const filePath = `qr/${uid}.png`;

    const { error } = await supabase.storage
      .from("qr-codes")
      .upload(filePath, blob, {
        contentType: "image/png",
        upsert: true,
      });

    if (error) throw error;

    const { data: publicUrl } = supabase.storage
      .from("qr-codes")
      .getPublicUrl(filePath);

    return publicUrl.publicUrl;
  } catch (error) {
    console.error("❌ Error generating and uploading QR code:", error);
    throw error;
  }
}
