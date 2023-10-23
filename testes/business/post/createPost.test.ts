import { PostBusiness } from "../../../src/business/PostBusiness"
import { CreatPostSchema } from "../../../src/dtos/posts/CreatPost.dto"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { PostDataBaseMock } from "../../mocks/postDataBaseMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"

describe("criaçao de post", () => {
    const postBusiness = new PostBusiness(new TokenManagerMock(), new IdGeneratorMock(), new PostDataBaseMock())
    test("post criado com sucesso!", async () => {
        const input = CreatPostSchema.parse({
            content: "conteudo do post",
            token: "token-mock-user"
        })
        const output = await postBusiness.creatPost(input)
        expect(output).toBeUndefined()
    })
})
