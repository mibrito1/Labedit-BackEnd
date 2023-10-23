import { PostBusiness } from "../../../src/business/PostBusiness"
import { EditPostSchema } from "../../../src/dtos/posts/EditPost.dto"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { PostDataBaseMock } from "../../mocks/postDataBaseMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"

describe("ediçao de post", () => {
    const postBusiness = new PostBusiness(new TokenManagerMock(), new IdGeneratorMock(), new PostDataBaseMock())
    test("post editado com sucesso!", async () => {
        const input = EditPostSchema.parse({
            content: "conteudo do post",
            token: "token-mock-user",
            id: "post-id-mock2"
        })
        const output = await postBusiness.editPost(input)
        expect(output).toEqual({
            message: "Post editado com sucesso!"
        })
    })
})