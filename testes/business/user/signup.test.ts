
import { UserBusiness } from "../../../src/business/userBusness"
import { SignupSchema } from "../../../src/dtos/users/signup.dto"
import { HashManagerMock } from "../../mocks/hashManagerMock"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"
import { UserDataBaseMock } from "../../mocks/userDataBaseMock"

describe("teste do signup", () => {
    const userBusiness = new UserBusiness(new IdGeneratorMock(), new UserDataBaseMock(), new HashManagerMock(), new TokenManagerMock())
    test("signup com sucesso!", async () => {
        const input = SignupSchema.parse({
            email: "user3@email.com",
            password: "user123",
            name: "joao"
        })
        const output = await userBusiness.signup(input)
        expect(output).toEqual({ message: "usuario registrado com sucesso", token: "token-mock" })
    })
})