import dotenv from "dotenv"
import Server from "./Models/Server"

dotenv.config()
const server = new Server
server.listen()
