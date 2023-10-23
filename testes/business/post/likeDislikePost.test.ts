
import { PostBusiness } from "../../../src/business/PostBusiness"
import { LikeDislikePostSchema } from "../../../src/dtos/posts/LikeDislikePost.dto"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { PostDataBaseMock } from "../../mocks/postDataBaseMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"

describe("like de post", () => {
    const postBusiness = new PostBusiness(new TokenManagerMock(), new IdGeneratorMock(), new PostDataBaseMock())
    test("interaçao feita com sucesso!", async () => {
        const input = LikeDislikePostSchema.parse({
            token: "token-mock-user",
            id: "post-id-mock1",
            like: true
        })
        const output = await postBusiness.likeDislikePost(input)
        expect(output).toEqual({
            message: "Interação feita com sucesso!"
        })
    })
})