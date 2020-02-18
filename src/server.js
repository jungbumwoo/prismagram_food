import "./env";
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";

import { isAutenticated } from "./middlewares";
import { sendSecretMail } from "./utils";

sendSecretMail("woojungbum12@gmail.com", "123");

console.log(process.env.PORT);
const PORT = process.env.PORT;


const server = new GraphQLServer({
    schema,
    context: ({ request }) => ({ request, isAutenticated })
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);


server.start({port : PORT}, () => 
    console.log(`✅  Server running on port ${PORT}`)
);