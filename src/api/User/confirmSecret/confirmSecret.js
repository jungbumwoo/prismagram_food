import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });
      console.log(user);
      if (user.loginSecret === secret) {
        await prisma.updateUser({
          where: { id: user.id },
          data: {
            loginSecret: secret
          }
        });
        return generateToken(user.id);
      } else {
        console.log(user.loginSecret);
        console.log(secret);
        throw Error("Wrong email/secret combination");
      }
    }
  }
};