import { CommentBusiness } from "../../../src/business/CommentBusiness"
import { CreatCommentSchema } from "../../../src/dtos/posts/comments/CreatComment.dto"
import { CommentDataBaseMock } from "../../mocks/commentDataBaseMock"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { PostDataBaseMock } from "../../mocks/postDataBaseMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"

describe("testando a criaçao de comentarios", () => {
    const commentBusiness = new CommentBusiness(
        new TokenManagerMock(), new IdGeneratorMock(), new PostDataBaseMock(), new CommentDataBaseMock()
    )
    test("Criado com sucesso!", async () => {
        const input = CreatCommentSchema.parse({
            token: "token-mock-user",
            postId: "post-id-mock2",
            content: "conteudo"

        })
        const output = await commentBusiness.creatComment(input)
        expect(output).toBeUndefined()
    })
})