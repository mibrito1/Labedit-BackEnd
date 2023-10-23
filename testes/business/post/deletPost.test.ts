import { PostBusiness } from "../../../src/business/PostBusiness"
import { DeletePostSchema } from "../../../src/dtos/posts/DeletePost.dto"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { PostDataBaseMock } from "../../mocks/postDataBaseMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"

describe("deleçao de post", () => {
    const postBusiness = new PostBusiness(new TokenManagerMock(), new IdGeneratorMock(), new PostDataBaseMock())
    test("post deletado com sucesso!", async () => {
        const input = DeletePostSchema.parse({
            id: "post-id-mock2",
            token: "token-mock-user"
        })
        const output = await postBusiness.deletePost(input)
        expect(output).toEqual({ message: "Post apagado com suesso!" })
    })
})
