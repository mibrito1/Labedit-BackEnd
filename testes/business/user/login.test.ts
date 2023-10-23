import { UserBusiness } from "../../../src/business/userBusness"
import { LoginSchema } from "../../../src/dtos/users/login.dto"
import { HashManagerMock } from "../../mocks/hashManagerMock"
import { IdGeneratorMock } from "../../mocks/idGeneretorMock"
import { TokenManagerMock } from "../../mocks/tokenGeneratorMock"
import { UserDataBaseMock } from "../../mocks/userDataBaseMock"

describe("teste do login", () => {
    const userBusiness = new UserBusiness(new IdGeneratorMock(), new UserDataBaseMock(), new HashManagerMock(), new TokenManagerMock())
    test("login com sucesso!", async () => {
        const input = LoginSchema.parse({
            email: "user1@email.com",
            password: "user123"
        })
        const output = await userBusiness.login(input)
        expect(output).toEqual({ message: "Login feito com sucesso!", token: "token-mock-user" })
    })
})