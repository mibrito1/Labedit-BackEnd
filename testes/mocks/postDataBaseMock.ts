import { date } from "zod"
import { LIKEDISLIKEDB, POST_LIKE, PostDb, PostDbWithCreatorName } from "../../src/models/Posts"
import { BaseDatabase } from "../../src/dataBase/BaseDataBase"


const mockPosts: PostDb[] = [{
    id: "post-id-mock1",
    creator_id: "id-mock-admin",
    comments: 0,
    created_at: new Date().toISOString(),
    content: "conteudo",
    dislikes: 0,
    likes: 0,
    updated_at: new Date().toISOString(),
},
{
    id: "post-id-mock2",
    creator_id: "id-mock-user",
    comments: 0,
    created_at: new Date().toISOString(),
    content: "conteudo",
    dislikes: 0,
    likes: 0,
    updated_at: new Date().toISOString(),
}]
const mockPostsWithCreatorName: PostDbWithCreatorName[] = [{
    id: "post-id-mock1",
    creator_id: "id-mock-admin",
    comments: 0,
    created_at: new Date().toISOString(),
    content: "conteudo",
    dislikes: 0,
    likes: 0,
    updated_at: new Date().toISOString(),
    creator_name: "maria"
},
{
    id: "post-id-mock2",
    creator_id: "id-mock-user",
    comments: 0,
    created_at: new Date().toISOString(),
    content: "conteudo",
    dislikes: 0,
    likes: 0,
    updated_at: new Date().toISOString(),
    creator_name: "fulano"
}]
const likeDislikeMock: LIKEDISLIKEDB[] = [{
    like: 1,
    post_id: "post-id-mock2",
    user_id: "id-mock-admin",
},
{
    like: 0,
    post_id: "post-id-mock1",
    user_id: "id-mock-user",
}]
export class PostDataBaseMock extends BaseDatabase {

    public async creatPost(post: PostDb): Promise<void> {
        return
    }
    public async getPosts(): Promise<PostDbWithCreatorName[]> {
        const response = mockPostsWithCreatorName
        return response
    }
    public async getPostId(id: string): Promise<PostDb> {
        const [response]: PostDb[] = mockPosts.filter(post => post.id === id)
        return response
    }
    public async deletePost(id: string): Promise<void> {
        return
    }
    public async editPost(post: PostDb, id: string): Promise<void> {
        return
    }
    public async creatLikeDislikePost(likeDislike: LIKEDISLIKEDB): Promise<void> {
        return
    }
    public async findLikeDislikePost(likeDislike: LIKEDISLIKEDB): Promise<POST_LIKE | undefined> {
        const response = likeDislikeMock.find(like => like.user_id === likeDislike.user_id && like.post_id === likeDislike.post_id)
        if (response === undefined) {
            return undefined
        } else if (response.like === 1) {
            return POST_LIKE.ALREADY_LIKED
        } else {
            return POST_LIKE.ALREADY_DISLIKED
        }
    }
    public async removeLikeDislikePost(likeDislike: LIKEDISLIKEDB): Promise<void> {
        return
    }
    public async updateLikeDislikePost(likeDislike: LIKEDISLIKEDB): Promise<void> {
        return
    }

}