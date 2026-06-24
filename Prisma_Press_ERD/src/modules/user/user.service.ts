import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import { RegisterPayload } from "./user.interface";

const registerUserIntoDB = async (payload: RegisterPayload) => {
  const { name, email, password, profilePhoto } = payload;

  const ifUserExist = await prisma.user.findUnique({
    where: { email },
  });

  if (ifUserExist) {
    throw new Error("User with this email already Exists");
  }

  const hashesPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashesPassword,
      profile: {
        create: {
          profilePhoto,
        },
      },
    },
  });

  //   await prisma.profile.create({
  //     data: {
  //       userId: createdUser.id,
  //       profilePhoto,
  //     },
  //   });

  const user = await prisma.user.findUnique({
    where: {
      id: createdUser.id,
      email: createdUser.email || email,
    },

    omit: { password: true },

    include: {
      profile: true,
    },
  });

  return user;
};

export const userService = {
  registerUserIntoDB,
};
