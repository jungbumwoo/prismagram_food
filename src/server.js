import dotenv from "dotenv";
import path from "path";
console.log(__dirname);
dotenv.config({ path: path.resolve(__dirname, ".env") });

import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

console.log(process.env.PORT);
const PORT = process.env.PORT;


const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({port : PORT}, () => 
    console.log(`✅  Server running on port ${PORT}`)
);