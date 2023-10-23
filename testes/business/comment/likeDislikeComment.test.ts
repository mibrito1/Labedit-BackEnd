
import { CommentBusiness } from "../../../src/business/CommentBusiness"
import { CreatCommentSchema } from "../../../src/dtos/posts/comments/CreatComment.dto"
import { LikeDislikeCommentSchema } from "../../../src/dtos/posts/comments/likeDislikeComments.dto"
import { CommentDataBaseMock } from "../../mocks/commentDataBaseMock"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { PostDataBaseMock } from "../../mocks/postDataBaseMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"

describe("testando like e dislike de comentarios", () => {
    const commentBusiness = new CommentBusiness(
        new TokenManagerMock(), new IdGeneratorMock(), new PostDataBaseMock(), new CommentDataBaseMock()
    )
    test("interaçao feita com sucesso!", async () => {
        const input = LikeDislikeCommentSchema.parse({
            token: "token-mock-user",
            postId: "post-id-mock1",
            commentId: "comment1",
            like: true
        })
        const output = await commentBusiness.likeDislikeComment(input)
        expect(output).toEqual({
            message: "Interação feita com sucesso!"
        })
    })
})