import conf from "../../conf/conf.js";
import { Client, ID, Databases, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
       this.client
       .setEndpoint(conf.appwriteUrl)
       .setProject(conf.appwriteptojectId);
       this.databases = new Databases(this.client);
       this.bucket = new Storage(this.client)

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
      
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
            
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            
        }
    }

    async UpdatePost( slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteBucketId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {

            console.log("Appwrite serive :: createPost :: error", error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.deleteDocument(
                conf.appwriteDtabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
             return false
            
        }
    }

    async getPost(slug){
        try {
              return await this.databases.getDocument(
                conf.appwriteDtabaseId,
                conf.appwriteCollectionId,
                slug
            )
          }  catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
             return false
            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocument(
                conf.appwriteDtabaseId,
                conf.appwriteCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            return false
        }
    }

    async uploadFile(file){
      try {
        return await this.bucket.createFile(  
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
      } catch (error) {

        console.log("Appwrite serive :: uploadFile :: error", error);
        return false
        
      }
        
       }
        async deleteFile(fileId){
           try {
            await this.bucket.deleteFile(
                await this.bucket.deleteFile(
                   conf.appwriteBucketId,
                   fileId
                )
            )
            return true

           } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
            
           }

        }

    getFIlePreview(fileId){
       return this.bucket.getFIlePreview(
        conf.appwriteBucketId,
        fileId
       )
    }

}





const service = new Service()
export default service