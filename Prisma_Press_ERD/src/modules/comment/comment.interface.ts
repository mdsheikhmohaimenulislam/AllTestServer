import { CommentStatus } from "../../../generated/prisma/enums";

export interface ICreateComment{
    postId: string;
    authorId: string;
    content: string;
}



export interface IUpdateCommentPayload { 
    content ?: string, 
    status ?: CommentStatus 
}