import { CommentBusiness } from "../../../src/business/CommentBusiness"
import { CreatCommentSchema } from "../../../src/dtos/posts/comments/CreatComment.dto"
import { GetCommentSchema } from "../../../src/dtos/posts/comments/GetComments.dto"
import { CommentDataBaseMock } from "../../mocks/commentDataBaseMock"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { PostDataBaseMock } from "../../mocks/postDataBaseMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"

describe("testando a visualizaçao de comentarios", () => {
    const commentBusiness = new CommentBusiness(
        new TokenManagerMock(), new IdGeneratorMock(), new PostDataBaseMock(), new CommentDataBaseMock()
    )
    test("visualizado com sucesso!", async () => {
        const input = GetCommentSchema.parse({
            token: "token-mock-user",
            postId: "post-id-mock2",
        })
        const output = await commentBusiness.getComment(input)
        expect(output.comments).toContainEqual(
            {
                content: "conteudo",
                createdAt: expect.any(String),
                creatorId: "id-mock-admin",
                dislikes: 0,
                likes: 0,
                id: "comment1",
                postId: "post-id-mock1",
                updatedAt: expect.any(String),
                creatorName: "maria"

            }
        )
    })
})