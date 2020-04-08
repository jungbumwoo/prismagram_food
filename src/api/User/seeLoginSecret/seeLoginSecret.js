import { prisma }from "../../../../generated/prisma-client";

export default {
    Query: {
        seeLoginSecret: async(_, args) => {
            const { email } = args;
            return prisma.user({ email });
        }
    }
};