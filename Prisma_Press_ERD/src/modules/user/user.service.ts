import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import { RegisterPayload } from "./user.interface";
import { Payload } from '../../../generated/prisma/internal/prismaNamespace';

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

const getMyProfileFromDB = async (userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
    omit: {
      password: true,
    },
    include: {
      profile: true,
    },
  });
  // console.log(user);
  
  return user;
};


const updateMyProfileIntoDB = async (userId: string, Payload:any) => {
  const {name,email,profilePhoto, bio} = Payload;

  const updateUser = await prisma.user.update({

    where:{
      id:userId
    },

    data:{
      name,
      email,
      profile:{
        update:{
          profilePhoto,
          bio
        }
      }
    },

    omit:{
      password:true
    },

    include:{
      profile:true
    }

  });

  return updateUser

};


export const userService = {
  registerUserIntoDB,
  getMyProfileFromDB,
  updateMyProfileIntoDB,
};
