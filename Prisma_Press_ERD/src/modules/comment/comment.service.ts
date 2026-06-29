import { prisma } from "../../lib/prisma";
import { ICreateComment } from "./comment.interface";
import { comment } from "../../../generated/prisma/browser";

const createComment = async (authorId: string, payload: ICreateComment) => {
  await prisma.post.findUniqueOrThrow({
    where: {
      id: payload.postId,
    },
  });

  const comment = await prisma.comment.create({
    data: {
      ...payload,
      authorId,
    },
  });

  return comment;
};

const getCommentByAuthorId = () => {};

const getCommentByCommentId = () => {};

const updateComment = () => {};

const deleteComment = () => {};

const moderateComment = () => {};

export const commentService = {
  createComment,
  getCommentByAuthorId,
  getCommentByCommentId,
  updateComment,
  deleteComment,
  moderateComment,
};
