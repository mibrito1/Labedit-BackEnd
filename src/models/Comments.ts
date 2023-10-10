export interface LIKEDISLIKECOMMENTDB {
    user_id: string,
    comment_id: string,
    like: number
}
export enum COMMENT_LIKE {
    ALREADY_LIKED = "ALREADY_LIKED",
    ALREADY_DISLIKED = "ALREADY_DISLIKED",
}
export interface CommentDb {
    id: string,
    creator_id: string,
    post_id: string
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string
}
export interface CommentDbWithCreatorName extends CommentDb {
    creator_name: string
}
export interface CommentModel {
    id: string,
    creatorId: string,
    postId: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updatedAt: string
}
export interface CommentModelWithCreatorName extends CommentModel {
    creatorName: string
}
export class Comment {
    constructor(
        private id: string,
        private creatorId: string,
        private postId: string,
        private content: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string,
        private updatedAt: string
    ) { //simboliza o super
    }
    public getId(): string {
        return this.id
    }
    public setId(newId: string): void {
        this.id = newId
    }
    public getCreatorId(): string {
        return this.creatorId
    }
    public setCreatorId(newCreatorId: string): void {
        this.creatorId = newCreatorId
    }
    public getPostId(): string {
        return this.postId
    }
    public setpostId(newPostId: string): void {
        this.postId = newPostId
    }

    public getContent(): string {
        return this.content
    }
    public setContent(newContent: string): void {
        this.content = newContent
    }
    public getLikes(): number {
        return this.likes
    }
    public setLikes(newLikes: number): void {
        this.likes = newLikes
    }
    public getDisLikes(): number {
        return this.dislikes
    }
    public setDisLikes(newDisLikes: number): void {
        this.dislikes = newDisLikes
    }

    public getCreatedAt(): string {
        return this.createdAt
    }
    public setCreatedAt(newCreatedAt: string): void {
        this.createdAt = newCreatedAt
    }
    public getUpdatedAt(): string {
        return this.updatedAt
    }
    public setUpdatedAt(newUpdatedAt: string): void {
        this.updatedAt = newUpdatedAt
    }
    public addLike = (): void => {
        this.likes++;
    };
    public removeLike = (): void => {
        this.likes--;
    };
    public addDislike = (): void => {
        this.dislikes++;
    };
    public removeDislike = (): void => {
        this.dislikes--;
    };

    public toCommentModel(): CommentModel {
        return {
            id: this.id,
            creatorId: this.creatorId,
            postId: this.postId,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
    public toCommentDb(): CommentDb {
        return {
            id: this.id,
            creator_id: this.creatorId,
            post_id: this.postId,
            content: this.content,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        }
    }
}
export class CommentWithCreatorName extends Comment {
    constructor(
        id: string,
        creatorId: string,
        postId: string,
        content: string,
        likes: number,
        dislikes: number,
        createdAt: string,
        updatedAt: string,
        private creatorName: string
    ) {
        super(
            id, creatorId, postId, content, likes, dislikes, createdAt, updatedAt
        )
    }
    public getCreatorName(): string {
        return this.creatorName
    }
    public setCreatorName(newCreatorName: string): void {
        this.creatorName = newCreatorName
    }
    public toCommentModelWithCreatorName(): CommentModelWithCreatorName {
        return {
            id: this.getId(),
            creatorId: this.getCreatorId(),
            postId: this.getPostId(),
            content: this.getContent(),
            likes: this.getLikes(),
            dislikes: this.getDisLikes(),
            createdAt: this.getCreatedAt(),
            updatedAt: this.getUpdatedAt(),
            creatorName: this.getCreatorName()
        }
    }
}