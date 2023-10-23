import { PostBusiness } from "../../../src/business/PostBusiness"
import { EditPostSchema } from "../../../src/dtos/posts/EditPost.dto"
import { GetPostSchema } from "../../../src/dtos/posts/GetPost.dto"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { PostDataBaseMock } from "../../mocks/postDataBaseMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"

describe("visualizaçao dos posts", () => {
    const postBusiness = new PostBusiness(new TokenManagerMock(), new IdGeneratorMock(), new PostDataBaseMock())
    test("posts vizualizados com sucesso!", async () => {
        const input = GetPostSchema.parse({
            token: "token-mock-user",
        })
        const output = await postBusiness.getPost(input)
        expect(output.posts).toContainEqual(
            {
                id: "post-id-mock1",
                creatorId: "id-mock-admin",
                comments: 0,
                createdAt: expect.any(String),
                content: "conteudo",
                dislikes: 0,
                likes: 0,
                updatedAt: expect.any(String),
                creatorName: "maria"
            }
        )
    })
})