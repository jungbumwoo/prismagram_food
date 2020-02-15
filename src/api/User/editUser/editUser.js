import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        editUser: (_, args, { request, isAuthenticate }) => {
                isAuthenticate(request);
                const { username, email, firstName, lastname, bio } = args;
                const { user } = request;
                return prisma.updateUser({
                    where: {id: user.id},
                    data: { username, email, firstName, lastName, bio }    
                });
        }
    }
}