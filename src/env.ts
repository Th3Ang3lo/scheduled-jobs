import 'dotenv/config'

export class Env {
  public static getMongoUrl() {
    return process.env.MONGODB_URL
  }
}