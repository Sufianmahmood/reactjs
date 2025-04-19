const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteptojectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDtabaseId: String(import.meta.env.VITE_APPWITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
   

}
export default conf