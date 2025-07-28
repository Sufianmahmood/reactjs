import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client;
  account;

  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl) // e.g., https://cloud.appwrite.io/v1
      .setProject(conf.appwriteProjectId); // your project ID

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("AuthService :: createAccount :: error", error);
      throw error;
    }
  }
async login({ email, password }) {
  try {
    return await this.account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.error("AuthService :: login :: error", error);
    throw error;
  }
}


  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("AuthService :: getCurrentUser :: error", error);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("AuthService :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
