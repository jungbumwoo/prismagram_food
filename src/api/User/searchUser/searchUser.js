import { prisma } from "../../../../generated";

export default {
    Query: {
        searchUser: async(_, args) =>
            prisma.users({
                where: {
                    OR: [
                        { username_contains: args.term },
                        { first_contains: args.term },
                        { lastName_contains: args.term }
                    ]
                }
            })
    }
}