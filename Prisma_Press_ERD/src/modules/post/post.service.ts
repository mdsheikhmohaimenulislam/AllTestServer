import { Prisma } from "../../../generated/prisma/browser";
import { CommentStatus, PostStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { ICreatePost, IUpdatePostPayload } from "./post.interface";

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

const getPostById = async (postId: string) => {
  const transactionResult = await prisma.$transaction(async (tx) => {
    await tx.post.update({
      where: {
        id: postId,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    // throw new Error("fake error")
    const post = await tx.post.findUniqueOrThrow({
      where: {
        id: postId,
      },

      include: {
        author: {
          omit: {
            password: true,
          },
        },

        comments: {
          where: {
            status: CommentStatus.APPROVED,
          },

          orderBy: {
            createdAt: "desc",
          },
        },

        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
    return post;
  });

  return transactionResult;
};

const getMyPost = async (authorId: string) => {
  const result = await prisma.post.findMany({
    where: {
      authorId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      author: {
        omit: {
          password: true,
        },
      },

      _count: {
        select: {
          comments: true,
        },
      },
    },
  });

  return result;
};

const getPostStatus = async () => {
  const transactionResult = await prisma.$transaction(async (tx) => {
    const [
      totalPosts,
      totalPublishedPosts,
      totalDraftPosts,
      totalArchivedPosts,
      totalComments,
      totalApprovedComments,
      totalRejectedComments,
      totalPostViewsAggregate,
    ] = await Promise.all([
      await tx.post.count(),
      await tx.post.count({
        where: {
          status: PostStatus.PUBLISHED,
        },
      }),
      await tx.post.count({
        where: {
          status: PostStatus.DRAFT,
        },
      }),

      await tx.post.count({
        where: {
          status: PostStatus.ARCHIVED,
        },
      }),
      await tx.comment.count(),

      await tx.comment.count({
        where: {
          status: CommentStatus.APPROVED,
        },
      }),

      await tx.comment.count({
        where: {
          status: CommentStatus.REJECT,
        },
      }),

      await tx.post.aggregate({
        _sum: {
          views: true,
        },
      }),
    ]);

    return {
      totalPosts,
      totalPublishedPosts,
      totalDraftPosts,
      totalArchivedPosts,
      totalComments,
      totalApprovedComments,
      totalRejectedComments,
      totalPostViews: totalPostViewsAggregate._sum.views,
    };
  });

  return transactionResult;
};

const updatePost = async (
  postId: string,
  payload: IUpdatePostPayload,
  authorId: string,
  isAdmin: boolean,
) => {
  // if (!isAdmin && past.authorId !== authorId) {
  //   throw new Error("You are not the owner of the post!");
  // }

  // Only admin can update isFeatured
  if (!isAdmin && payload.isFeatured !== undefined) {
    throw new Error("Only admin can update the featured status.");
  }

  await prisma.post.update({
    where: {
      id: postId,
    },
    data: payload,
  });

  const post = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId,
    },
    include: {
      author: {
        omit: {
          password: true,
        },
      },
      comments: {
        where: {
          status: CommentStatus.APPROVED,
        },
        orderBy: {
          createdAt: "desc",
        },
      },

      _count: {
        select: {
          comments: true,
        },
      },
    },
  });

  return post;
};

const deletePost = async (
  postId: string,
  authorId: string,
  isAdmin: boolean,
) => {
  const post = await prisma.post.findUniqueOrThrow({
    where: {
      id: postId,
    },
  });

  if (!isAdmin && post.authorId !== authorId) {
    throw new Error("You are not the owner of the post!");
  }
  await prisma.post.delete({
    where: {
      id: postId,
    },
  });
};

export const postService = {
  createPostInToDB,
  getAllPost,
  getPostById,
  updatePost,
  deletePost,
  getPostStatus,
  getMyPost,
};
