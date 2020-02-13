import { isAutenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        toggleLike: async(_, args, { request }) => {
            isAutenticated(request);
            const { postId } = args;
            const { user } = request;
            const filterOptions = {
                AND: [
                    {
                        user: {
                            id: user.id
                        }
                    },
                    {
                        post:{
                            id: postId
                        }
                    }
                ]
            };
            try {
                const existingLike = await prisma.$exists.like(filterOptions);
                if (existingLike) {
                    // TO DO. delete Connection.
                } else {
                    await prisma.createLike({
                        user: {
                            connect: {
                                id: user.id
                            }
                        },
                        post: {
                            connect: {
                                id: postId
                            }
                        }
                    });
                }
                return true;
            } catch {
                return false;
            }
        }
    }
};