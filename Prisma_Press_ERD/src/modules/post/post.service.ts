import { prisma } from "../../lib/prisma";
import { auth } from "../../middleWares/auth";
import { ICreatePost } from "./post.interface";

const createPostInToDB = async (payload: ICreatePost, userId: string) => {
  const result = await prisma.post.create({
    data: {
      ...payload,
      authorId: userId,
    },
  });

  return result;
};

const getAllPost = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        omit: {
          password: true,
        },
      },
      comments: true,
    },
  });

  return posts;
};

const getPostById = async () => {};

const updatePost = async () => {};

const deletePost = async () => {};

const getPostStatus = async () => {};

const getMyPost = async () => {};

export const postService = {
  createPostInToDB,
  getAllPost,
  getPostById,
  updatePost,
  deletePost,
  getPostStatus,
  getMyPost,
};
