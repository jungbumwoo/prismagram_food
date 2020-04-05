import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation : {
        createAccount: async(_, args) => {
            const { username, email, firstname= "", lastname= "", bio = ""} = args;
                await prisma.createUser({
                    username,
                    email,
                    firstName,
                    lastName,
                    bio
                });
                return ture;
        }
    }
}

